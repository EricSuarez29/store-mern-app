import express from "express";
import { CustomerService } from "../services/customer.service";

const router = express.Router();
const service = new CustomerService();

router.get('/', 
async (req, res, next) =>{
    try {
        const customers = await service.find(req.query);
        res.json(customers)
    } catch (error) {
        next(error);
    }
});

router.get('/:id', 
async (req, res, next) =>{
    try {
        const { id } = req.params;
        const customer = await service.findOne(id);
        res.json(customer)
    } catch (error) {
        next(error);
    }
});

router.post('/', 
async (req, res, next) =>{
    try {
        const customerCreated = await service.create(req.body);
        res.json(customerCreated);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', 
async (req, res, next) =>{
    try {
        const { id } = req.params;
        const customerUpdated = await service.update(id, req.body);
        res.json(customerUpdated);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) =>{
    try {
        const { id } = req.params;
        await service.remove(id);
        res.json({ok: true});
    } catch (error) {
        next(error);
    }
});

export default router;