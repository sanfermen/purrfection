import {Router} from "express";
import catApiController from "../../controllers/cat/catApiController.js";

const router = Router();

// conseguir todos los cats
router.get("/",catApiController.getAll)

// crear un cat
router.post("/",catApiController.create)

// conseguir un cat por id
router.get("/:id",catApiController.getByID)

// modificar un cat
router.post("/:id",catApiController.edit)

// ruta para eliminar un cat
router.post("/:id/delete",catApiController.remove)

export default router;