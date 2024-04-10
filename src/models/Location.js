import { Schema } from "mongoose";

export const LocationSchema = new Schema({
    country: { type: String, required: true },
    area: { type: String, required: true },
    labels: [{ type: String, required: true }]
}, { toJSON: { virtuals: true } })
