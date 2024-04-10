import { Schema } from "mongoose";

export const RatSchema = new Schema({
    name: { type: String, required: true },
    callsign: { type: String, required: true },
    picture: { type: String, required: true },
    specialties: [{ type: String, required: true }]
}, { toJSON: { virtuals: true } })