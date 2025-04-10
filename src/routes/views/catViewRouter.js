import { Router } from "express";
import catRouter from "./catRouter.js";


const router = Router();

router.get("/",(req,res)=>{
    res.send("hello cat");
})
router.use("/cat",catRouter);

export default router