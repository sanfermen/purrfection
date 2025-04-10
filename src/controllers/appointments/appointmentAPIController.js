import appointmentController from "./appointmentController.js"

//CRUD DE APPOINTMENT

//CREATE

//crear el appointment con los datos recibidos del formulario
async function create(req, res) {
    try {
        const result = await appointmentController.create(req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor" });
        }
    }
}

//READ

// conseguir todos los appointments
async function getAll(req, res) {
    try {
        const appointments = await appointmentController.getAll();
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

// conseguir un appointment concreto
async function getByID(req, res) {
    try {
        const id = req.params.id;
        const appointment = await appointmentController.getByID(id);
        res.json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}


//UPDATE

// edición de los appointments
async function edit(req, res) {
    try {
        const id = req.params.id;
        const result = await appointmentController.edit(id, req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor" });
        }
    }
}

//DELETE

//eliminar la cita
async function remove(req, res) {
    try {
        const id = req.params.id;
        const result = await appointmentController.remove(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

//EXPORTS
 
export default {
    getAll,
    getByID,
    create,
    edit,
    remove
};