import {Router} from "express";
import userAPIController from "../../controllers/user/userAPIController.js"

const router = Router();

router.post("/",userAPIController.create)

router.get("/:id",userAPIController.getByID)

router.post("/:id",userAPIController.edit)

router.post("/:id/delete",userAPIController.remove)

export default router;