import { Router } from "express";
import catViewController from "../../controllers/cat/catViewController.js";

const router = Router();

// conseguir todos los appointments
router.get("/",catViewController.getAll)

// crear un appointment
router.get("/new",catViewController.createForm)
router.post("/",catViewController.create)

// conseguir appointment por id
router.get("/:id",catViewController.getByID)

// modificar un appointment
router.get("/:id/edit",catViewController.editForm)
router.post("/:id",catViewController.edit)

// ruta para eliminar un appointment
router.post("/:id/delete",catViewController.remove)

export default router;