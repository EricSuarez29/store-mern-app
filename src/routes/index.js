import express from "express";
import customerRouter from "./customer.route";
import productsRouter from "./products.route";
import invoceRouter from "./invoces.route";
const router = express.Router();

router.use('/customers', customerRouter);
router.use('/products', productsRouter);
router.use('/invoces', invoceRouter);

export default router;