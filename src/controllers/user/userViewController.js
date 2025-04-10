import userController from "./userController.js";

async function getAll(req, res) {
        const users = await userController.getAll();
        const role = req.session.user?.role;
        res.render("user/list", {users,role});  //route
}

async function getByID(req, res) {
        const id = req.params.id;
        const user = await userController.getByID(id);
        res.render("user/show", {user}); //route
}

async function createForm(req, res) {
        // no categorias   
        res.render("user/create");   //route
}

async function create(req, res) {
        const response = await userController.create(req.body);
        res.redirect("/user");  //route
}

async function editForm(req, res) {
        const id = req.params.id;
        const user = await userController.getByID(id);
        if (!user) {
            return res.redirect("/user");
        }
        res.render("user/edit", { user }); //route
}

async function edit(req, res) {
        const id = req.params.id;
        const result = await userController.edit(id,req.body);
        res.redirect("/users/" + id);  //route
}

async function remove(req, res) {
        const id = req.params.id;
        const response = await userController.remove(id);
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