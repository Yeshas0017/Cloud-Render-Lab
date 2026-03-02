import { mockProducts } from '@/src/lib/data';
import { NextResponse } from 'next/server';

/**
 * PHASE 3.6: RESEARCH DATA RECOVERY
 * 1. Model Fix: Switched to stable 'gemini-2.5-flash' on v1.
 * 2. Endpoint Fix: Using 'v1' Gemini API for production stability.
 * 3. Schema Fix: Combined prompts into a single 'text' part to avoid JSON schema errors.
 * 4. TypeScript Fix: Explicit types for fetch options and error handling (TS7006, TS18046).
 */

interface FetchOptions {
    method: string;
    headers: Record<string, string>;
    body: string;
}

// Helper: Exponential Backoff for API Stability
const fetchWithRetry = async (
    url: string,
    options: FetchOptions,
    retries: number = 5,
    delay: number = 1000
): Promise<any> => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            // Retry on rate limit (Code 429)
            if (response.status === 429 && retries > 0) {
                throw new Error('Rate limited');
            }

            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP Error: ${response.status}`);
        }

        return await response.json();
    } catch (error: any) {
        if (retries <= 0) throw error;
        console.log(`⚠️ Retrying API call... (${retries} attempts left)`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
};

export async function POST(request: Request) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.length < 10) {
        console.error('❌ BACKEND ERROR: GEMINI_API_KEY not found.');
        return NextResponse.json(
            { error: 'Internal Server Error: API Key missing. Check your .env.local file.' },
            { status: 500 }
        );
    }

    try {
        // UNIVERSAL PROMPT: Combined System + Data logic
        // This format is universally accepted across Gemini v1 and v1beta endpoints.
        const combinedPrompt = `
      INSTRUCTION: You are a cloud infrastructure analyst. Summarize hardware diversity in 2 sentences.
      CONTEXT: Analyze these products: ${JSON.stringify(mockProducts)}
    `;

        const payload = {
            contents: [
                {
                    parts: [{ text: combinedPrompt }],
                },
            ],
        };

        console.log('🚀 Attempting Gemini 2.5 Flash API call (v1)...');

        // Switching to v1 Gemini API with the stable model id
        const result = await fetchWithRetry(
            `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        const summaryText =
            result.candidates?.[0]?.content?.parts?.[0]?.text || 'Analysis complete.';
        console.log('✅ AI Summary generated successfully via Gemini 2.5 Flash.');

        return NextResponse.json({
            summary: summaryText,
            timestamp: new Date().toISOString(),
        });
    } catch (error: any) {
        console.error('❌ Gemini API Error:', error.message);
        return NextResponse.json(
            { error: `AI Analysis failed: ${error.message}` },
            { status: 500 }
        );
    }
}

/**
 * DIAGNOSTIC GET HANDLER
 */
export async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;
    const isKeyLoaded = apiKey && apiKey.length > 10;

    return NextResponse.json({
        status: 'online',
        diagnostics: {
            isBackendAlive: true,
            apiVersion: 'v1',
            targetModel: 'gemini-2.5-flash',
            apiKeyDetected: !!isKeyLoaded,
            timestamp: new Date().toISOString(),
        },
    });
}