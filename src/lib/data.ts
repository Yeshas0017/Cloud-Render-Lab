/**
 * CENTRAL MOCK DATABASE
 * To ensure a scientifically "Fair Test", all rendering variants 
 * (SSG, SSR, ISR) must fetch from this same data source.
 */

export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    description: string;
    latencyTarget: string;
    lastUpdated: string;
}

export const mockProducts: Product[] = [
    {
        id: "1",
        name: "Quantum Processor X1",
        category: "Core Unit",
        price: "$499.00",
        description: "High-performance serverless chip designed for rapid data processing and low-latency execution.",
        latencyTarget: "0.2ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "2",
        name: "Neural Link Module",
        category: "AI Interface",
        price: "$850.00",
        description: "Advanced interface for real-time AI processing and neural network integration.",
        latencyTarget: "14ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "3",
        name: "Cloud Core G2",
        category: "Infrastructure",
        price: "$1,200.00",
        description: "Enterprise-grade cloud infrastructure component for scalable serverless deployments.",
        latencyTarget: "4ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "4",
        name: "Edge Sync Hub",
        category: "Networking",
        price: "$320.00",
        description: "Low-latency networking hub optimized for edge computing and rapid sync operations.",
        latencyTarget: "8ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "5",
        name: "Vertex AI Accelerator",
        category: "AI Interface",
        price: "$950.00",
        description: "Specialized hardware for accelerating machine learning inference at the edge.",
        latencyTarget: "12ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "6",
        name: "Nexus Security Gateway",
        category: "Networking",
        price: "$450.00",
        description: "Zero-trust security gateway with integrated hardware-level encryption.",
        latencyTarget: "5ms",
        lastUpdated: new Date().toLocaleTimeString()
    },
    {
        id: "7",
        name: "Titan Storage Array",
        category: "Infrastructure",
        price: "$2,100.00",
        description: "Ultra-fast NVMe storage array optimized for massive parallel read/write operations.",
        latencyTarget: "3ms",
        lastUpdated: new Date().toLocaleTimeString()
    }
    // ... Add more items to reach 20 as you progress
];

export async function getProducts() {
    // Artificial delay to simulate real network conditions for benchmarks
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockProducts;
}