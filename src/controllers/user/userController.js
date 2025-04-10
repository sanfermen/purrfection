import User from "../../models/user.js";
import Cat from "../../models/cat.js";
import Appointment from "../../models/appointment.js";

async function getAll() {
        const users = await User.findAll();
                //aquí tiene: { include:StandCategory } dentro del findAll
        return users;
}

async function getByID() {
        const user = await User.findByPk(id, {
            include: [Cat, Appointment]
        });
        return user;
}

async function create(data) {
        data.creation_date = new Date();
        const response = await User.create(data)

        return response;
}

async function edit(id,data) {
        const result = await user.update(
        data,
        {
            where: {
                user_id:id
           }
        }
        );
        return result;
}

async function remove(id) {
        const response = await User.destroy({
            where: {
                user_id: id
            }
        });
        return response;
}

export {
    getAll,
    getByID,
    create,
    edit,
    remove,
}

export default {
    getAll,
    getByID,
    create,
    edit,
    remove,
};