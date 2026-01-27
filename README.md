Cloud Render Lab: Next.js Performance Research

A scientific comparison of rendering strategies (SSG, SSR, ISR) deployed on Google Cloud Platform (Cloud Run). This project serves as the practical implementation for a Master's research study on performance and SEO optimization in serverless architectures.

Research Objectives

Performance Benchmarking: Quantify the latency differences (TTFB, LCP) between Static Site Generation, Server-Side Rendering, and Incremental Static Regeneration.

Cold Start Analysis: Measure the impact of serverless container "cold starts" on user experience in Google Cloud Run.

AI Latency Integration: Analyze how external API calls (Gemini AI) affect response times across different rendering modes.

SEO Evaluation: Verify search engine crawlability and metadata integrity for dynamic vs. static routes.

Tech Stack

Framework: Next.js 15+ (App Router)

Language: TypeScript

Styling: Tailwind CSS

Infrastructure: Google Cloud Run, Cloud Build, Artifact Registry

AI: Google Gemini API

Testing: k6 (Load Testing), Lighthouse (SEO/Performance)

📁 Project Structure

/src/app/page.tsx - The Research Hub (Dashboard)

/src/app/ssg/ - Page 1: Static Site Generation Experiment

/src/app/ssr/ - Page 2: Server-Side Rendering Experiment

/src/app/isr/ - Page 3: Incremental Static Regeneration Experiment

/src/app/api/ - Serverless API routes for Gemini AI and Metrics logging

Getting Started

Prerequisites

Node.js v22+

Google Cloud SDK (gcloud)

Gemini API Key (stored in .env.local)

Installation

npm install


Development

npm run dev


Scientific Metrics Tracked

TTFB: Time to First Byte (Server Response)

LCP: Largest Contentful Paint (Visual Load)

Cold Start Time: Container initialization delay (ms)

API Latency: Gemini AI response duration