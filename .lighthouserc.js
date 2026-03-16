module.exports = {
  ci: {
    collect: {
      url: [
        "https://cloud-render-service-959147017608.us-central1.run.app/ssg",
        "https://cloud-render-service-959147017608.us-central1.run.app/ssr",
        "https://cloud-render-service-959147017608.us-central1.run.app/isr"
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: "--no-sandbox --headless --disable-gpu"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};