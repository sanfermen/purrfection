import User from "../models/user.js";
import Cat from "../models/cat.js";
import Appointment from "../models/appointment.js";

async function getAll(req, res) {
        const users = await User.findAll();
        const role = req.session.user?.role;
        res.render("user/list", { users, role });  //route
}

async function getByID(req, res) {
        const id = req.params.id;
        const user = await User.findByPk(id, {
            include: [Cat, Appointment]
        });
        
        res.render("user/show", { user }); //route
}

async function createForm(req, res) {
// no categorias   
    res.render("user/create");   //route
}

async function create(req, res) {
        const { email, password, name, role } = req.body;
// Sin creation_date (const creation_date = new Date();)
        const response = await User.create({
            email,
            password, // Claude dice que esto lo "hasheemos"
            name,
            role: role || "client" // Por defecto="client" si no se cambia
        });
        
        res.redirect("/users");  //route
}

async function editForm(req, res) {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.redirect("/users");
        }
        res.render("user/edit", { user }); //route
}

async function edit(req, res) {
        const id = req.params.id;
        const { email, password, name, role } = req.body; //datos para modificar user

// TODO : danel-señal
        const updateData = {
            email,
            name,
            role
        };      //esto 
        
        // Only update password if it's provided
        if (password && password.trim() !== '') {
            updateData.password = password;
        }
        
        const result = await User.update(
            updateData,
            {
                where: {
                    user_id: id
                }
            }
        );
        
        res.redirect("/users/" + id);  //route
}

async function remove(req, res) {
        const id = req.params.id;
        const response = await User.destroy({
            where: {
                user_id: id
            }
        });
        
        res.redirect("/users");  //route
}

export {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove,
}

export default {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove,
};