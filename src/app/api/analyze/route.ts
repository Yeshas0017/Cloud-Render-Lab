import { mockProducts } from '@/src/lib/data';
import { NextResponse } from 'next/server';

/**
 * PRODUCTION INFERENCE ENGINE (v4.5 Research Edition)
 * This API generates AI summaries and tracks internal "Inference Tax" metrics.
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
            if (response.status === 429 && retries > 0) {
                throw new Error('Rate limited');
            }
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP Error: ${response.status}`);
        }

        return await response.json();
    } catch (error: any) {
        if (retries <= 0) throw error;
        console.log(`⚠️ Gemini API Busy. Retrying... (${retries} left)`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
};

export async function POST(request: Request) {
    const apiKey = process.env.GEMINI_API_KEY;

    // Start the internal research timer
    const startTime = Date.now();

    if (!apiKey || apiKey.length < 10) {
        return NextResponse.json(
            { error: 'Internal Server Error: API Key missing.' },
            { status: 500 }
        );
    }

    try {
        const combinedPrompt = `
      INSTRUCTION: You are a professional cloud infrastructure analyst. 
      Analyze these products and summarize the hardware diversity in exactly 2 sentences.
      DATA: ${JSON.stringify(mockProducts)}
    `;

        const payload = {
            contents: [{ parts: [{ text: combinedPrompt }] }],
        };

        // Call Gemini API
        const result = await fetchWithRetry(
            `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        // Calculate the actual AI processing time
        const endTime = Date.now();
        const internalInferenceTime = endTime - startTime;

        const summaryText = result.candidates?.[0]?.content?.parts?.[0]?.text || 'Analysis complete.';

        // Return the summary PLUS research telemetry
        return NextResponse.json({
            summary: summaryText,
            timestamp: new Date().toISOString(),
            telemetry: {
                inference_tax_ms: internalInferenceTime,
                model: 'gemini-2.5-flash',
                status: 'fresh_generation'
            }
        }, {
            // Add research headers for browser inspection
            headers: {
                'X-Research-Inference-Time': `${internalInferenceTime}ms`,
                'X-Strategy-Variant': 'SSR/ISR-Update'
            }
        });
    } catch (error: any) {
        console.error('❌ Inference Error:', error.message);
        return NextResponse.json(
            { error: `AI Analysis failed: ${error.message}` },
            { status: 500 }
        );
    }
}

/**
 * DIAGNOSTIC HANDLER
 */
export async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;
    return NextResponse.json({
        status: 'online',
        diagnostics: {
            apiVersion: 'v1',
            model: 'gemini-2.5-flash',
            apiKeyLoaded: !!(apiKey && apiKey.length > 10),
            environment: process.env.NODE_ENV,
            timestamp: new Date().toISOString(),
        },
    });
}