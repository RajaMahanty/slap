import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017",
    NODE_ENV: process.env.NODE_ENV || "development",
}