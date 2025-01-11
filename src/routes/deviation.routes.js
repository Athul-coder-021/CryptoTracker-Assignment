import express from "express";
import { Crypto } from "../models/cryptoData.model.js";

const router = express.Router();

// API Endpoint: /deviation
router.get("/", async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: "Query parameter 'coin' is required." });
    }

    try {
        // Fetch the last 100 records for the requested coin
        const records = await Crypto.find({ coinId: coin })
            .sort({ timestamp: -1 }) // Sort by timestamp (most recent first)
            .limit(100) // Get only the last 100 records
            .exec();

        if (!records || records.length === 0) {
            return res.status(404).json({ error: `No data found for '${coin}'.` });
        }

        // Extract prices
        const prices = records.map((record) => record.priceUSD);

        // Calculate mean
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;

        // Calculate standard deviation
        const variance =
            prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
            prices.length;
        const standardDeviation = Math.sqrt(variance);

        // Return result
        return res.json({ deviation: parseFloat(standardDeviation.toFixed(2)) });

    } catch (error) {
        console.error("Error calculating standard deviation:", error.message);
        return res.status(500).json({ error: "Internal server error." });
    }
});

export default router;
