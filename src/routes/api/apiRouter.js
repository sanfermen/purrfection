import { Router } from "express";
import catRouter from "./catRouterRouter.js";
import userRouter from "./userRouter.js";
import appointmentRouter from "./appointmentRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/cat",catRouter);
router.use("/user",userRouter);
router.use("appointment",appointmentRouter);
router.use("/",authRouter);

export default router