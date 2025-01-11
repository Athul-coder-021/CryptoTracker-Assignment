import mongoose, { Schema } from "mongoose";


const cryptoSchema = new Schema({
    coinId: { type: String, required: true },
    name: { type: String, required: true },
    priceUSD: { type: Number, required: true },
    marketCapUSD: { type: Number, required: true },
    change24h: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
})

export const Crypto = mongoose.model("Crypto", cryptoSchema)