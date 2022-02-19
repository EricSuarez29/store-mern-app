import { Schema, model} from "mongoose"
import { Joi } from "express-validation"

const CustomerSchema = new Schema({
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

const name = Joi.string().min(3),
    rfc = Joi.string().min(5),
    address = Joi.string(),
    email = Joi.string().email(),
    limit = Joi.number().integer(),
    offset = Joi.number().integer();

export const postCustomerValidator = {
    body: Joi.object({
        name: name.required(),
        rfc,
        address,
        email: email.required()
    })
}

export const putCustomerValidator = {
    body: Joi.object({
        name,
        rfc,
        address,
        email
    })
}

export const getCustomerValidator = {
    query: {
        limit,
        offset
    }
}

export default model("Customer", CustomerSchema);