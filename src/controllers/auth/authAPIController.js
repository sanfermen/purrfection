import authController from "./authController.js";
import { createToken } from "../../utils/token.js"

//REGISTRARSE
async function register(req, res) {
    try {
        const result = await authController.register(req.body);
        res.json(result); //TODO que no se enseñe la contraseña
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor interno" });
        }
    }
}

//LOGGEARSE
async function login(req, res) {
    try {
        const {email, password} = req.body;
        const result = await authController.login(email, password); //He corregido esta porque llamaba a register
        const token = createToken(result);
        res.json({token:token}); //TODO que no se enseñe la contraseña
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor interno" });
        }
    }
}

// DESLOGGEARSE
function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

export default {
    register,
    login,
    logout
}