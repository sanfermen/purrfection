import { Router } from "express";
import standRouter from "./standRouter.js";
import productRouter from "./productRouter.js";
import authRouter from "./authViewRouter.js";

const router = Router();

router.use("/stand",standRouter);
router.use("/product",productRouter);
router.use("/",authRouter);

export default router