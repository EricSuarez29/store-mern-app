import { Schema, model } from "mongoose"

export const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});

export default model("Customer", CustomerSchema);