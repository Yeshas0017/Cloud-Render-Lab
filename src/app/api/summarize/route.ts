import { mockProducts } from '@/src/lib/data';
import { NextResponse } from 'next/server';


/**
 * PHASE 2.2: FINAL AI BACKEND
 * This route connects your UI to the Gemini API using your secret key.
 * * 🛠️ HOW TO FIX "Unexpected end of JSON input":
 * 1. Check your root folder for a file named: .env.local
 * 2. It must contain exactly: GEMINI_API_KEY=AIzaSy... (your key)
 * 3. IMPORTANT: Restart your terminal (Ctrl+C then npm run dev).
 * 4. Test by visiting: http://localhost:3000/api/summarize
 */

// Helper: Exponential Backoff for API Stability
const fetchWithRetry = async (url: string, options: any, retries = 5, delay = 1000): Promise<any> => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            if (response.status === 429 && retries > 0) throw new Error('Rate limited');
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP Error: ${response.status}`);
        }
        return await response.json();
    } catch (error: any) {
        if (retries <= 0) throw error;
        console.log(`⚠️ Retrying API call... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
};

export async function POST(request: Request) {
    // Pull key from environment
    const apiKey = process.env.GEMINI_API_KEY;

    // 1. Validation Check: Is the key loaded into Node.js?
    if (!apiKey || apiKey === "your_key_here" || apiKey.length < 10) {
        console.error("❌ BACKEND ERROR: GEMINI_API_KEY is not detected in .env.local.");
        return NextResponse.json(
            { error: "Internal Server Error: API Key missing. Please restart your terminal." },
            { status: 500 }
        );
    }

    try {
        const systemPrompt = "You are a cloud infrastructure analyst. Summarize the hardware diversity of the provided list in 2 sentences.";
        const userQuery = `Analyze these products: ${JSON.stringify(mockProducts)}`;

        const payload = {
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
        };

        console.log("🚀 Attempting Gemini API call...");

        const result = await fetchWithRetry(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }
        );

        const summaryText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Analysis complete.";
        console.log("✅ AI Summary generated successfully.");

        return NextResponse.json({
            summary: summaryText,
            timestamp: new Date().toISOString()
        });

    } catch (error: any) {
        console.error("❌ Gemini API Error:", error.message);
        return NextResponse.json(
            { error: `AI Analysis failed: ${error.message}` },
            { status: 500 }
        );
    }
}

/**
 * DIAGNOSTIC GET HANDLER
 * Visit http://localhost:3000/api/summarize in your browser.
 * If this returns a valid JSON, your POST request will also work.
 */
export async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;
    const isKeyLoaded = apiKey && apiKey.length > 10 && apiKey !== "your_key_here";

    return NextResponse.json({
        status: "online",
        diagnostics: {
            isBackendAlive: true,
            apiKeyDetected: !!isKeyLoaded,
            apiKeyPrefix: isKeyLoaded ? apiKey?.substring(0, 7) + "..." : "MISSING",
            timestamp: new Date().toISOString()
        }
    });
}