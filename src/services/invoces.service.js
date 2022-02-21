import Invoce from "../models/invoce.model";
import boom from "@hapi/boom"

export class InvoceService {
    async find({limit = 4, offset = 0}){
        limit = parseInt(limit);
        offset = parseInt(offset);
        const invoces = await Invoce.find(); 

        let totalPages = 0;
        if(invoces) {
            totalPages = Math.ceil(await Invoce.find().count() / limit);
        }
        return {
            totalPages,
            page: offset,
            perPage: limit,
            content: invoces
        }
    }

    async findOne(id){
        const invoce = await Invoce.findById(id);
        if(!invoce) throw boom.notFound();
        return invoce;
    }

    async create(data){
        const invoce = new Invoce(data);
        invoce.calculateTotal();
        return await invoce.save();
    }

    async remove(id){
        const invoceDeleted = await Invoce.findByIdAndDelete(id);
        if(!invoceDeleted) throw boom.notFound();
    }
}