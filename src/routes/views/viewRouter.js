import { Router } from "express";
import catRouter from "./catViewRouter.js";
import userRouter from "./userViewRouter.js";
import appointmentRouter from "./appointmentViewRouter.js";
import authRouter from "./authViewRouter.js";

const router = Router();

router.use("/cat",catRouter);
router.use("/user",userRouter);
router.use("/appointments",appointmentRouter);
router.use("/",authRouter);
router.get("/",(req, res) => {
	res.render("home")
})

export default router