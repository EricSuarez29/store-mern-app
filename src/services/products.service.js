import Product from "../models/product.model"
import boom from "@hapi/boom"

export class ProductService {
    async create(data){
        return await Product.create(data);
    }

    async find({limit = 4, offest = 0}){
        limit = parseInt(limit);
        offest = parseInt(offest)
        const products = await Product.find().skip(offest * limit).limit(limit);

        let totalPages = 0; 
        if(products) {
            totalPages = Math.ceil(await Product.find().count() / limit);
        }

        return {
            totalPages,
            page: offest,
            perPage: limit,
            content: products
        }
    }

    async findOne(id){
        const product = await Product.findById(id);
        if(!product) throw boom.notFound();
        return product;
    }

    async update(id, data){
        const productUpdated = await Product.findByIdAndUpdate(id, data, { new: true});
        if(!productUpdated) throw boom.notFound();
        return productUpdated;
    }

    async remove(id){
        const productDeleted = await Product.findByIdAndDelete(id);
        if(!productDeleted) throw boom.notFound();
    }
}