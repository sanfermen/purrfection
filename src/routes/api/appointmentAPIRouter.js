import {Router} from "express";
import appointmentAPIController from "../../controllers/appointments/appointmentAPIController.js"

const router = Router();

// conseguir todos los appointments
router.get("/",appointmentAPIController.getAll)

// crear un appointment
router.post("/",appointmentAPIController.create)

// conseguir appointment por id
router.get("/:id",appointmentAPIController.getByID)

// modificar un appointment
router.post("/:id",appointmentAPIController.edit)

// ruta para eliminar un appointment
router.post("/:id/delete",appointmentAPIController.remove)

export default router;