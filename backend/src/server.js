import express from "express"
import "dotenv/config"
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(ENV.PORT, async () => {
    console.log("Listening on Port:", ENV.PORT)
    await connectDB()
});