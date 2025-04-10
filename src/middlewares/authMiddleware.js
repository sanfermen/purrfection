
function isLoggedInSession(req,res,next){
    const user  = req.session.user;
    if(!user){
        return res.redirect("/login?error=You+are+not+logged+in")
        //return res.json({error:"not logged in"});
    }
    // lo ideal sería comprobar en base de datos que el usuario existe
    next();
}

async function isSeller(req,res,next){
    const user  = req.session.user;
    if(!user){
        return res.redirect("/login?error=You+are+not+logged+in")
    }
    if(user.role ==="seller"){
        next();
    }else{
        return res.redirect("/login?error=You+are+not+a+seller")
    }
}


export {
    isLoggedInSession,
    isSeller
}