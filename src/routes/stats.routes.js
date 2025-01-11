import express from "express";
import {Crypto} from "../models/cryptoData.model.js";

const router = express.Router();

// API Endpoint: /stats
router.get("/", async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Query parameter 'coin' is required." });
  }

  try {
    // Fetch the latest data for the requested coin
    const latestData = await Crypto.findOne({ coinId: coin })
      .sort({ timestamp: -1 }) // Sort by timestamp in descending order
      .exec();

    if (!latestData) {
      return res.status(404).json({ error: `Data for '${coin}' not found.` });
    }

    // Format the response
    return res.json({
      price: latestData.priceUSD,
      marketCap: latestData.marketCapUSD,
      "24hChange": latestData.change24h,
    });
  } catch (error) {
    console.error("Error fetching stats:", error.message);
    return res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
