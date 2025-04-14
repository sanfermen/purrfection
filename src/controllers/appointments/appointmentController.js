import Appointment from "../../models/appointment.js";
import Cat_Has_Appointment from "../../models/cha.js";
import Cat from "../../models/cat.js";
import User from "../../models/user.js";
import { AppointmentDateNotProvided, AppointmentDescriptionNotProvided } from "../../utils/errors.js";
import { Op } from "sequelize";

//CRUD DE APPOINTMENT

//CREATE

//crear el appointment con los datos recibidos del formulario
async function create(data) {
    data.creation_date = new Date();
    if (!data.start_date) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.end_date) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.description) {
        throw new AppointmentDescriptionNotProvided();
    }
    const response = await Appointment.create(data);
    return response;
}

//READ

// conseguir todos los appointments
async function getAll() {
    const appointments = await Appointment.findAll({
        where: {
            accepted: false, //que no se hayan aceptado todavía
            end_date: {
                [Op.gt]: new Date() //si son más tarde que NOW
            }
        },
        include: [
            {
                model: Cat_Has_Appointment,
                include: [
                    {
                        model: Cat,
                        attributes: ['cat_id', 'name', 'image']
                    }
                ]
            },
            {
                model: User,
                attributes: ['user_id', 'name']
            }
        ],
        order: [['start_date', 'ASC']]
    });
    return appointments;
}


// conseguir un appointment concreto
async function getByID(id) {
    const appointment = await Appointment.findByPk(id, {
        include: [
            {
                model: Cat_Has_Appointment,
                include: [
                    {
                        model: Cat,
                        attributes: ['cat_id', 'name', 'image']
                    }
                ]
            },
            {
                model: User,
                attributes: ['user_id', 'name']
            }
        ]
    });
    return appointment;
}


//UPDATE

// edición de los appointments
async function edit(id, data) {
    if (data.start_date || data.end_date) { //si las fechas no son números
        const start_date = new Date(data.start_date);
        const end_date = new Date(data.end_date);
        if (isNaN(start_date.getTime()) || isNaN(end_date.getTime())) {
            throw new Error ("Fecha inválida");
        }
    }
    const result = await Appointment.update(
        data,
        {
            where: {
                appointment_id: id
            }
        }
    )
    return result;
}


//DELETE

//eliminar la cita
async function remove(id) {
    const response = await Appointment.destroy({
        where: { 
            appointment_id: id
        }
    });
    return response;
}


//EXPORTS

export default { //como vamos a tener varias funciones con los mismos nombres, mejor exportarlo en default para renombrar
    getAll,
    getByID,
    create,
    edit,
    remove
};