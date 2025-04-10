import userController from "./userController.js";

async function getAll(req, res) {
        const users = await userController.getAll(); //¿? findAll
        res.json(users);
}

async function getByID(req, res) {
        const id = req.params.id;
        const user = await userController.getByID(id);
        res.json(user);
}

async function create(req, res) {                                   //cambiar cosas pug: edit.pug  [revisar formularios en pugs]
        const response = await userController.create(req.body);
        res.json(response);
}

async function edit(req, res) {
        const id = req.params.id;
        const result = await userController.edit(id,req.body);
        res.json(result);
}

async function remove(req, res) {
        const id = req.params.id;
        const response = await userController.remove(id);        
        res.json(response);
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