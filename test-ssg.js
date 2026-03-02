import http from 'k6/http';
import { sleep, check } from 'k6';

/**
 * RESEARCH VARIANT 01: SSG (The Newspaper)
 * Goal: Establish the absolute speed limit of the Google Cloud Run infrastructure.
 */

export const options = {
    stages: [
        { duration: '20s', target: 20 }, // Warm up
        { duration: '40s', target: 50 }, // High load (50 users)
        { duration: '20s', target: 0 },  // Cool down
    ],
    thresholds: {
        // SSG should be extremely fast (Edge cached)
        http_req_duration: ['p(95)<400'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const url = 'https://cloud-render-service-959147017608.us-central1.run.app/ssg';
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'ssg_content_verified': (r) => r.body.includes('Newspaper'),
    });

    sleep(1);
}