import {Router} from "express";
import appointmentViewController from "../../controllers/appointments/appointmentViewController.js";

const router = Router();

// conseguir todos los appointments
router.get("/",appointmentViewController.getAll)

// crear un appointment
router.get("/create",appointmentViewController.createForm)
router.post("/",appointmentViewController.create)

// conseguir appointment por id
router.get("/:id",appointmentViewController.getByID)

// modificar un appointment
router.get("/:id/edit",appointmentViewController.editForm)
router.post("/:id",appointmentViewController.edit)

// ruta para eliminar un appointment
router.post("/:id/delete",appointmentViewController.remove)

export default router;