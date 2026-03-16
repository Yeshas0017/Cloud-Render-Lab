import http from 'k6/http';
import { sleep, check } from 'k6';

/**
 * RESEARCH VARIANT 01: SSG (The Newspaper)
 * Updated with Null-Checks to prevent script crashes on network glitches.
 */

export const options = {
    stages: [
        { duration: '20s', target: 20 }, // Warm up
        { duration: '40s', target: 50 }, // High load (50 users)
        { duration: '20s', target: 0 },  // Cool down
    ],
    thresholds: {
        // Widened threshold to 2s to account for GCP scaling spikes
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.05'],
    },
};

export default function () {
    const url = 'https://cloud-render-service-959147017608.us-central1.run.app/ssg';
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        // The fix: Added (r.body && ...) to ensure the script doesn't crash if body is null
        'ssg_content_verified': (r) => r.body && (r.body.includes('MEAL PREP') || r.body.includes('SSG')),
    });

    sleep(1);
}