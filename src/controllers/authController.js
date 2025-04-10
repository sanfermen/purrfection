import User from "../models/user.js";
import {hash,compare} from "../utils/bcrypt.js";

// FORMULARIOS
function loginForm(req, res) {
    const { error, message } = req.query;
    res.render("auth/login", { error, message });
}

function registerForm(req, res) {
    const { error, message } = req.query;
    res.render("auth/register", { error, message });
}

//REGISTRARSE
async function register(req, res) {
    const { name, email, password, role } = req.body;
    const oldUser = await User.findOne({
        where: {
            email: email
        }
    })
    if (oldUser) { //si el nuevo usuario que estás intentando crear ya existe
        return res.redirect(`/register?error=a+user+with+that+email+already+exists`);
        //return res.json({error:"Ya existe un usuario con este email"})
    }
    const hashedPassword = await hash(password)
    const result = await User.create({ name, email, password: hashedPassword, role });
    res.redirect("/login?message=Registered+successfully");
}

//LOGGEARSE
async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (!user) {
        return res.redirect("/login?error=invalid+credentials");
        //return res.json({error:"Credenciales erróneas"});
    }
    const result = await compare(password, user.password);
    if (result) { // si la contraseña es correcta 
        const role = user.role;
        req.session.user = {
            id: user.user_id,
            role: role
        }
        return res.redirect("/?message=You+are+logged+in");
        //return res.json({message:"You are logged in"})
    } else {
        return res.redirect("/login?error=invalid+credentials");
        //return res.json({error:"invalid credentials"})
    }

}

// DESLOGGEARSE

function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

export default {
    loginForm,
    registerForm,
    register,
    login,
    logout
}