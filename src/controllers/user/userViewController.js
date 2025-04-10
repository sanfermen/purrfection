import userController from "./userController.js";

async function getByID(req, res) {
        try {
                const id = req.params.id;
                const user = await userController.getByID(id);
                res.render("user/show", {user});
        } catch (error) {
            console.error(error);
            res.render("layout", { error: "Error del servidor interno" });
        }
}

async function createForm(req, res) {
        try { 
                const error = req.query.error;
                res.render("user/create");
        } catch (error) {
                console.error(error);
                res.render("layout", { error: "Error del servidor interno" });
        }
}

async function create(req, res) {
        try {
                const response = await userController.create(req.body);
                res.redirect("/user");
        } catch (error) {
                console.error(error);
        if (error.statusCode) {
                res.redirect("/stand/new?error=" + error.message)
        } else {
                res.redirect("/stand/new?error=Internal+server+error")
        }
        }
}

async function editForm(req, res) {
        try {
                const id = req.params.id;
                const user = await userController.getByID(id);
                if (!user) {
                return res.redirect("/user");
                }
                res.render("user/edit", { user });
        } catch (error) {
                console.error(error);
                res.render("layout", { error: "Error del servidor interno" });
                }
        }

async function edit(req, res) {
        const id = req.params.id;
        try {
                const result = await userController.edit(id,req.body);
                res.redirect("/users/" + id);
        } catch(error){
                console.error(error);
                if (error.statusCode) {
                res.redirect(`/stand/${id}/edit?error=` + error.message)
        } else {
                res.render("layout", { error: "Error del servidor interno" });
        }
        }
}

async function remove(req, res) {
        try {
                const id = req.params.id;
                const response = await userController.remove(id);
                res.redirect("/users");
        }catch(error){
                res.render("layout", { error: "Error del servidor interno" }); 
        }
}

export {
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove,
}

export default {
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove,
};