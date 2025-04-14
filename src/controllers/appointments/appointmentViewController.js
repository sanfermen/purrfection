import appointmentController from "./appointmentController.js";

//CRUD DE APPOINTMENT

//CREATE

//formulario de creación de una cita
async function createForm(req, res) {
    try {
        const error = req.query.error;
        res.render("appointments/create", { error });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}

//crear el appointment con los datos recibidos del formulario
async function create(req, res) {
    try {
        const user = req.session.user; //obtener el usuario logueado
        if (!user || user.role !== "client") {
            return res.redirect("/appointments?error=No+puedes+crear+una+cita+si+no+eres+cliente");
        }
        req.body.user_id = user.id; //añadir el user_id al cuerpo de la solicitud
        const result = await appointmentController.create(req.body);
        res.redirect("/appointments?message=Cita+creada+correctamente");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/appointments/create?error=" + error.message);
        } else {
            res.redirect("/appointments/create?error=Error+del+servidor+interno");
        }
    }
}

//READ

// conseguir todos los appointments
/* async function getAll(req, res) {
    try {
        const appointments = await appointmentController.getAll();
        const role = req.session.user?.role;
        console.log(req.session.user); 
        res.render("appointments/showAll", { appointments, role });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
} */
    async function getAll(req, res) {
        try {
            const appointments = await appointmentController.getAll();
            const user = req.session.user; // Necesito el objeto completo para renderizar las vistas según el tipo de usuario
            console.log("Usuario:", user);
            res.render("appointments/showAll", { appointments, user });
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
        const user = req.session.user; //obtener usuario loggeado
        if (!appointment) {
            res.render("layout", { error: "No existe una solicitud con este id" });
            return;
        }
        res.render("appointments/show", { appointment, user });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}

// Obtener sólo las solicitudes de cada usuario

async function getMyAppointments(req, res) {
    try {
        const user = req.session.user;
        console.log('User ID:', user?.id);
        if (!user || !user.id) return res.redirect("/login?error=No+has+iniciado+sesion");
        const appointments = await appointmentController.getAll({ user_id: user.id });
        console.log('Citas:', appointments.length);
        const role = user.role;
        res.render('appointments/myAppointments', { appointments, role, user });
    } catch (error) {
        console.error("Error:", error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}
//UPDATE

// formulario de edición de appointments 
async function editForm(req, res) {
    try {
        const id = req.params.id;
        const appointment = await appointmentController.getByID(id);
        if (!appointment) return res.redirect("/appointments");

        // Permitir acceso al dueño o a un caretaker
        if (
            appointment.user_id !== req.session.user?.id &&
            req.session.user?.role !== 'caretaker'
        ) {
            return res.render("layout", { error: "No tienes permiso para editar esta cita" });
        }

        res.render("appointments/edit", {
            appointment,
            user: req.session.user
        });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Error interno del servidor" });
    }
}


async function edit(req, res) {
    const id = req.params.id;

    try {
        const appointment = await appointmentController.getByID(id);

        if (!appointment) {
            return res.redirect("/appointments?error=La+cita+no+existe");
        }

        const currentUser = req.session.user;

        // Si el usuario es el creador de la cita
        if (appointment.user_id === currentUser?.id) {
            // Evita que modifique el campo "accepted"
            const { start_date, end_date, description } = req.body;

            const updatedData = {
                start_date,
                end_date,
                description
                // Se omite "accepted"
            };

            await appointmentController.edit(id, updatedData);
            return res.redirect("/appointments/" + id);
        }

        // Si el usuario es un caretaker
        if (currentUser?.role === "caretaker") {
            // Solo puede cambiar el campo "accepted"
            const { accepted } = req.body;
            await appointmentController.edit(id, { accepted });
            return res.redirect("/appointments/" + id);
        }

        // Si no cumple ninguna condición, no tiene permiso
        return res.render("layout", { error: "No tienes permiso para editar esta cita" });

    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/appointments/${id}/edit?error=` + error.message);
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
        const appointment = await appointmentController.getByID(id);

        if (!appointment) return res.redirect("/appointments");

        if (appointment.user_id !== req.session.user?.id) {//solo el creador puede eliminar
            return res.render("layout", { error: "No tienes permiso para eliminar esta cita" });
        }
        const result = await appointmentController.remove(id);
        res.redirect("/appointments");
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
    remove,
    getMyAppointments
};