import express from "express";
import { InvoceService } from "../services/invoces.service";

const router = express.Router();
const service = new InvoceService();

router.get('/',
async (req, res, next) => {
    try {
        const invoces = await service.find(req.query);
        res.json(invoces);
    } catch (error) {
        next(error)
    }
});

router.post('/',
async (req, res, next) => {
    try {
        const invoce = await service.create(req.body);
        res.json(invoce);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',
async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.remove(id);
        res.json({message: "invoce deleted"})
    } catch (error) {
        next(error)
    }
})

export default router;