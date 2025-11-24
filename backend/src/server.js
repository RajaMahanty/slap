import express from "express"
import "dotenv/config"
import {ENV} from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(ENV.PORT, () => console.log("Listening on Port:", ENV.PORT));