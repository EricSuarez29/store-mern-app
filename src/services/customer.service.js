import Customer from "../models/customer.model";
import boom from "@hapi/boom"

export class CustomerService {
    async create(data){
        return await Customer.create(data);
    }

    async find({limit = 4, offset = 0}){
        limit = parseInt(limit);
        offset = parseInt(offset);
        const customers = await Customer.find().skip(limit * offset).limit(limit);
        const totalPages = Math.ceil(await Customer.find().count() / limit);
        return {
            totalPages,
            page: offset,
            perPage: limit,
            content: customers
        }
    }

    async findOne(id){
        const customer = await Customer.findById(id);
        if(!customer) throw boom.notFound();
        return customer;
    }

    async update(id, data){
        const customerUpdated = await Customer.findByIdAndUpdate(id, data, {new: true});
        if(!customerUpdated) throw boom.notFound();
        return customerUpdated;
    }

    async remove(id){
        const customerDeleted = await Customer.findByIdAndDelete(id);
        if(!customerDeleted) throw boom.notFound();
        return customerDeleted;
    }
}