import express from "express";
import { ProductService } from "../services/products.service";

const router = express.Router();
const service = new ProductService();

router.get('/', 
async (req, res, next) => {
    try {
        const products = await service.find(req.query);
        res.json(products);
    } catch (error) {
        next(error)
    } 
});

router.get('/:id', 
async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await service.findOne(id);
        res.json(products);
    } catch (error) {
        next(error)
    } 
});

router.post('/', 
async (req, res, next) => {
    try {
        const product = await service.create(req.body);
        res.json(product);
    } catch (error) {
        next(error)
    }
})

router.put('/:id',
async (req, res, next) => {
    try {
        const { id } = req.params;
        const productUpdated = await service.update(id, req.body);
        res.json(productUpdated);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id',
async (req, res, next) =>{
    try {
        const { id } = req.params;
        await service.remove(id);
        res.json({message: 'product deleted'})
    } catch (error) {
        next(error)
    }
})

export default router;