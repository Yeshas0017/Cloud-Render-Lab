import http from 'k6/http';
import { sleep, check } from 'k6';

/**
 * RESEARCH VARIANT 03: ISR (The Smart Buffet)
 * Goal: Prove that ISR provides static-level speeds while maintaining background freshness.
 */

export const options = {
    stages: [
        { duration: '20s', target: 20 },
        { duration: '40s', target: 50 },
        { duration: '20s', target: 0 },
    ],
    thresholds: {
        // ISR should hide the AI tax, staying below 1s
        http_req_duration: ['p(95)<800'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const url = 'https://cloud-render-service-959147017608.us-central1.run.app/isr';
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'isr_content_verified': (r) => r.body.includes('Buffet'),
    });

    sleep(1);
}