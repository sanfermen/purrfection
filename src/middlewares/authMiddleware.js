
// COMPROBACIÓN PARA VIEWS DEL INICIO DE SESIÓN
function isLoggedInSession(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=No+has+iniciado+sesion")
    }
    // lo ideal sería comprobar en base de datos que el usuario existe
    next();
}

//TODO para token y para postman y para api
/* function isLoggedInAPI(req, res, next) {
    const authorization = req.headers.authorization;
    console.log("authorization", authorization);
    if (!authorization) {

    }
    next();
}
 */

//para poder aceptar las solicitudes
async function isCaretaker(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=No+has+iniciado+sesion");
    }
    if (user.role === "caretaker") {
        next();
    } else {
        return res.redirect("/login?error=No+eres+purrfesional");
    }
}

//para poder crear los anuncios, editarlos, etc
async function isClient(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=No+has+iniciado+sesion");
    }
    if (user.role === "client") {
        next();
    } else {
        return res.redirect("/login?error=No+eres+cliente");
    }
}


export {
    isLoggedInSession,
    isCaretaker,
    isClient
}