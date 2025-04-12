import { Router } from "express";
import authViewController from "../controllers/auth/authViewController.js";

const router = Router();

router.get("/login",authViewController.loginForm)
router.get("/register",authViewController.registerForm);

router.post("/register",authViewController.register);
router.post("/login",authViewController.login);

router.get("/logout",authViewController.logout);

export default router;