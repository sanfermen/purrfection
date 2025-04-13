import authController from "./authController.js";

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
    try {
        const newUser = await authController.register(req.body);
        res.redirect("/login?message=Registro+correcto");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/register?error=` + error.message);
        } else {
            res.redirect(`/register?error=Error+del+servidor+interno`);
        }
    }
}

//LOGGEARSE
async function login(req, res) {
    try {
        const { email, password } = req.body; //del req body sacamos el mail y password. A esto se le llama Desestructura
        const loggedInUser = await authController.login(email, password);
        req.session.user = {
            id: loggedInUser.user_id,
            role: loggedInUser.role,
            name: loggedInUser.name,
            email: loggedInUser.email,
        };
        res.redirect("/?message=Login+correcto");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/login?error=` + error.message);
        } else {
            res.redirect(`/login?error=Error+del+servidor+interno`);
        }
    }
}

// DESLOGGEARSE
function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

//EXPORTS
export default {
    loginForm,
    registerForm,
    register,
    login,
    logout
}