import userController from "./userController.js";

async function getByID(req, res) {
        try {
                const id = req.params.id;
                const user = await userController.getByID(id);
                res.json(user);
        } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Error del servidor" });
        }
}

async function create(req, res) {      
        try {
        const response = await userController.create(req.body);
        res.json(response);
        } catch (error) {
                console.error(error);
                if (error.statusCode) {
                        res.status(error.statusCode).json({ error: error.message });
                } else {
                        res.status(500).json({ error: "Error del servidor" });
                }
        }
}

async function edit(req, res) {
        try {
                const id = req.params.id;
                const result = await userController.edit(id,req.body);
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

async function remove(req, res) {
        try{
                const id = req.params.id;
                const response = await userController.remove(id);        
                res.json(response);
        } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Error del servidor" });
        }
}

export {
    getByID,
    create,
    edit,
    remove,
}

export default {
    getByID,
    create,
    edit,
    remove,
};