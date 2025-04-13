

// Middleware para pasar usuario a todas las vistas

app.use((req, res, next) => { 
    
    res.locals.user = req.session.user || null; 
    next();
});

export default userToLocals;