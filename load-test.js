import http from 'k6/http';
import { sleep, check } from 'k6';

/**
 * PHASE 3: ISR BENCHMARKING (THE SMART BUFFET)
 * Research Goal: Prove that ISR provides SSG-level speeds (sub-500ms) 
 * while maintaining a background revalidation loop for AI freshness.
 */

// 1. LOAD CONFIGURATION
export const options = {
    stages: [
        { duration: '20s', target: 20 }, // Ramp up to 20 users
        { duration: '40s', target: 50 }, // Maintain 50 concurrent users
        { duration: '30s', target: 0 },  // Cool down
    ],
    thresholds: {
        // ISR should be nearly as fast as static pages
        http_req_duration: ['p(95)<1000'], // 95% of requests should be < 1s
        http_req_failed: ['rate<0.01'],    // Stricter 1% failure threshold for ISR
    },
};

export default function () {
    // 2. THE TARGET URL (ISR Variant)
    // We do NOT use cache-busters here because we want to test the Edge Cache.
    const url = 'https://cloud-render-service-959147017608.us-central1.run.app/isr';

    const res = http.get(url);

    // 3. RESEARCH VERIFICATION
    // This verifies that we are receiving the 'Buffet' (ISR) specific content.
    check(res, {
        'status is 200': (r) => r.status === 200,
        'isr_content_received': (r) => r.body.includes('Buffet'),
    });

    // Simulate standard user browsing behavior
    sleep(1);
}