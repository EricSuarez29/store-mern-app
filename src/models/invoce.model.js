import { Schema, model } from "mongoose";
import { ProductDetailSchema } from "./product-detail.model";
import { CustomerSchema } from "./customer.model";

export const InvoceSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    client: {
        type: CustomerSchema,
        required: true 
    },
    products: [ProductDetailSchema]
});

InvoceSchema.methods.calculateTotal = function(){
    const total = this.products.map(productDetail => {
        const {product} = productDetail;
        productDetail.price = product.price;
        return productDetail.price * productDetail.amount;
    }).reduce((accummulator, currentValue) => accummulator + currentValue);
    this.total = total;
}

export default model("Invoce", InvoceSchema);