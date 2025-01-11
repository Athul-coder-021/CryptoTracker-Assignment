import express from "express"
import cors from "cors"
import { fetchCryptoData } from "./controllers/cryptoRequest.controller.js"
import { Crypto } from "./models/cryptoData.model.js"
import cron from "node-cron";
import statsRouter from "./routes/stats.routes.js";
import deviationRouter from "./routes/deviation.routes.js";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


// --------------------------------  TASK - 1 ---------------------------------------------

// Background job to fetch and save data
const updateCryptoData = async () => {
    try {
        console.log("Fetching crypto data...");
        const data = await fetchCryptoData();

        // Saving data to MongoDB
        for (const [coinId, details] of Object.entries(data)) {
            const record = {
                coinId,
                name: coinId.replace("-", " ").toUpperCase(),
                priceUSD: details.usd,
                marketCapUSD: details.usd_market_cap,
                change24h: details.usd_24h_change,
            };

            await Crypto.create(record);
        }

        console.log("Crypto data updated successfully!");
    } catch (error) {
        console.error("Error updating crypto data:", error.message);
    }
};


// Schedule the job to run every 2 hours
cron.schedule("0 */2 * * *", updateCryptoData);


// Fetch data immediately when the server starts
(async () => {
    console.log("Fetching data on server start...");
    await updateCryptoData();
})();

// --------------------------------------------------------------------------------------------

// -------------------------------- TASK - 2 -------------------------------------------------

// Use the stats route
app.use("/stats", statsRouter);

// --------------------------------------------------------------------------------------------

// -------------------------------- TASK - 3 -------------------------------------------------

// Use the deviation route
app.use("/deviation", deviationRouter);

// --------------------------------------------------------------------------------------------

export { app }