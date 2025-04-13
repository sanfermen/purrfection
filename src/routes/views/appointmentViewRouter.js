import {Router} from "express";
import appointmentViewController from "../../controllers/appointments/appointmentViewController.js";
import { isLoggedInSession, isClient } from "../../middlewares/authMiddleware.js";

const router = Router();

// conseguir todos los appointments
router.get("/",appointmentViewController.getAll)

// crear un appointment
router.get("/create", isLoggedInSession, isClient, appointmentViewController.createForm);
router.post("/", isLoggedInSession, isClient, appointmentViewController.create);

// modificar un appointment
router.get("/:id/edit",appointmentViewController.editForm)
router.post("/:id",appointmentViewController.edit)

// ruta para eliminar un appointment
router.post("/:id/delete",appointmentViewController.remove)

// conseguir un appointment por el id (siempre tiene que ir la última para no sobreescribir el resto de rutas)
router.get("/:id",appointmentViewController.getByID)


export default router;


