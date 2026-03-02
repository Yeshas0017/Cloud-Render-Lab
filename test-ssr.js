import http from 'k6/http';
import { sleep, check } from 'k6';

/**
 * RESEARCH VARIANT 02: SSR (The Personal Chef)
 * Goal: Quantify the "Inference Tax"—the latency added by real-time AI generation.
 */

export const options = {
    stages: [
        { duration: '20s', target: 5 },  // Low ramp up
        { duration: '40s', target: 12 }, // Max 12 users (to respect Gemini 15 RPM limit)
        { duration: '20s', target: 0 },
    ],
    thresholds: {
        // SSR will be slow due to AI thinking time (~4-6s)
        http_req_duration: ['p(95)<15000'],
        http_req_failed: ['rate<0.05'],
    },
};

export default function () {
    const url = 'https://cloud-render-service-959147017608.us-central1.run.app/ssr';
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'ssr_content_verified': (r) => r.body.includes('Chef'),
    });

    // Longer sleep to prevent hitting Gemini API Rate Limits (429)
    sleep(2);
}