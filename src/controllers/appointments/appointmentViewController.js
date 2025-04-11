import appointmentController from "./appointmentController.js";

//CRUD DE APPOINTMENT

//CREATE

//formulario de creación de una cita
async function createForm(req, res) {
    try {
        const error = req.query.error;
        res.render("appointments/create", { error }); //route
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" }); //route
    }
}

//crear el appointment con los datos recibidos del formulario
async function create(req, res) {
    try {
        const result = await appointmentController.create(req.body);
        res.redirect("/appointments"); //route
    } catch (error) {
        if (error.statusCode) {
            res.redirect("/appointments/new?error=" + error.message) //route
        } else {
            res.redirect("/appointments/new?error=Internal+server+error") //route
        }
    }
}

//READ

// conseguir todos los appointments
async function getAll(req, res) {
    try {
        const appointments = await appointmentController.getAll();
        const role = req.session.user?.role;
        res.render("appointments/showAll", { appointments, role }); //route
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}

// conseguir un appointment concreto
async function getByID(req, res) {
    try {
        const id = req.params.id;
        const appointment = await appointmentController.getByID(id);
        if (!appointment) {
            res.render("layout", { error: "No existe una solicitud con este id" });
            return;
        }
        res.render("appointments/show", { appointment }); //route
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}


//UPDATE

// formulario de edición de appointments
async function editForm(req, res) {
    try {
        const id = req.params.id;
        const appointment = await appointmentController.getByID(id);
        if (!appointment) {
            res.redirect("/appointment")
        }
        res.render("appointments/edit", { appointment }); //route
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}

// edición de los appointments
async function edit(req, res) {
    const id = req.params.id;
    try {
        const result = await appointmentController.edit(id, req.body);
        res.redirect("/appointments/" + id); //route
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/appointments/${id}/edit?error=` + error.message)
        } else {
            res.render("layout", { error: "Error interno del servidor" });
        }
    }
}

//DELETE

//eliminar la cita
async function remove(req, res) {
    try {
        const id = req.params.id;
        const result = await appointmentController.remove(id);
        res.redirect("/appointment"); //route
    } catch (error) {
        res.render("layout", { error: "Error interno del servidor" });
    }
}

//EXPORTS

export default {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove
};