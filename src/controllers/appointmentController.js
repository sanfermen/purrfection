import Appointment from "../models/appointment.js";
import Cat_Has_Appointment from "../models/cha.js";
import Cat from "../models/cat.js";
import User from "../models/user.js";

//CRUD DE APPOINTMENT

//TODO meter en middleware las comprobaciones de si puedes editar, crear y borrar depende de tu rol
//CREATE

//formulario de creación de una cita
async function createForm(req, res) {
    res.render("appointments/create"); //route
}

//crear el appointment con los datos recibidos del formulario
async function create(req, res) {
    const { start_date, end_date, description } = req.body;
    const creation_date = new Date(); //TODO ????? preguntar a Danel si podemos introducir valores que no tengmaos en la tabla
    const user_id = req.session.user?.id;
    const response = await Appointment.create({ start_date, end_date, description, creation_date, user_id });
    res.redirect("/appointments"); //route
}

//READ

// conseguir todos los appointments
async function getAll(req, res) {
    const appointments = await Appointment.findAll({
        include: [ //hay que meterlos todos en un solo include
            {
                model: Cat_Has_Appointment,
                include: [//del Cat, solo estos atributos
                    {
                        model: Cat,
                        attributes: ['id', 'name', 'image']
                    }
                ]
            },
            {
                model: User,
                attributes: ['id', 'name']
            }
        ]
    });
    res.render("appointments/showAll", { appointments }); //route
}

// conseguir un appointment concreto
async function getByID(req, res) {
    const id = req.params.id;
    const appointment = await Appointment.findByPk(id, {
        include: [
            {
                model: Cat_Has_Appointment,
                include: [
                    {
                        model: Cat,
                        attributes: ['id', 'name', 'image']
                    }
                ]
            },
            {
                model: User,
                attributes: ['id', 'name']
            }
        ]
    });
    res.render("appointments/show", { appointment }); //route
}


//UPDATE

// formulario de edición de appointments
async function editForm(req, res) {
    const id = req.params.id;
    const appointmentForEditing = await Appointment.findByPk(id);
    if (!appointmentForEditing) {
        res.redirect("/appointment")
    }
    res.render("appointments/edit", { appointmentForEditing }); //route
}

// edición de los appointments
async function edit(req, res) {
    const id = req.params.id;
    const { start_date, end_date, description } = req.body; // los datos para modificar el appointment

    const result = await Appointment.update(
        {
            start_date: start_date,
            end_date: end_date,
            description: description,
        },
        {
            where: {
                appointment_id: id
            }
        }
    )
    res.redirect("/appointments/" + id); //route
}

//DELETE

//eliminar la cita
async function remove(req, res) {
    const id = req.params.id;
    await Appointment.destroy({
        where: { 
            appointment_id: id
        }
    });
    res.redirect("/appointment"); //route
}

//EXPORTS
 
export {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove
}

export default {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove
};