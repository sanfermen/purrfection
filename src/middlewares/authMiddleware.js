
function isLoggedInSession(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in")
        //return res.json({error:"No estás loggeado"});
    }
    // lo ideal sería comprobar en base de datos que el usuario existe
    next();
}

async function isPurrfessional(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in");
    }
    if (user.role === "purrfesional") {
        next();
    } else {
        return res.redirect("/login?error=You+are+not+a+purrfesional");
    }
}


export {
    isLoggedInSession,
    isPurrfessional
}