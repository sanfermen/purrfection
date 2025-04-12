import {Router} from "express";
import userViewController from "../../controllers/user/userViewController.js"

const router = Router();

router.post("/",userViewController.create)

router.get("/:id",userViewController.getByID)

router.post("/:id",userViewController.edit)

router.post("/:id/delete",userViewController.remove)

export default router;