import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || "failed to get env variable",
    NODE_ENV: process.env.NODE_ENV || "failed to get env variable",
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || "Failed to get secret",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || "Failed to get secret",
    STREAM_API_KEY: process.env.STREAM_API_KEY || "Failed to get secret",
    STREAM_API_SECRET: process.env.STREAM_API_SECRET || "Failed to get secret",
    SENTRY_DSN: process.env.SENTRY_DSN || "Failed to get secret",
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY || "Failed to get secret",
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY || "Failed to get secret",
}