
import catController from "./catController.js";

//obtener todos los gatos
async function getAll(req, res) { 
    try {
        const cats = await catController.getAll();
        res.json(cats);
    } catch (error) {
        console.error(error);a
        res.status(500).json({error: "server error"});
    }
}

// obtener un gato específico por su id 
async function getByID(req,res){
    try {
        const id = req.params.id;
        const cat = await catController.getByID(id); 
        res.json(cat);    
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "server error"});
    }
    
}

//crear un gato
async function create(req,res){
    try {
        const response = await catController.create(req.body);  //obtiene todos los campos del req.body
        res.json(response);    
    } catch (error) {
        console.error(error);
        if (error.statusCode) { //solo los nuestros tienen status code que los errores genéricos no tenían, está en erros.js, lo hemos definido nosotros y podemos manejarlo
            res.status(error.statusCode).json({error:error.message});
        } else {
            res.status(500).json({error: "Server error"});
        }
    }
   
}

//editar un gato
async function edit(req,res){
    try {
        const id = req.params.id;
        const result = await catController.edit(id,req.body);
        res.json(result);  
    } catch (error) {
        console.error(error);
        if (error.statusCode) { //solo los nuestros tienen status code que los errores genéricos no tenían, está en erros.js, lo hemos definido nosotros y podemos manejarlo
            res.status(error.statusCode).json({error:error.message});
        } else {
            res.status(500).json({error: "Server error"});
        }
    }   
}

async function remove(req,res){
    try {
        const id = req.params.id; //obtenemos la id de los parámetros
        const response  = await catController.destroy(id);
        res.json(response); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}


/* export{
    getAll,
    getByID,
    create,
    edit,
    remove
} */

export default {
    getAll,
    getByID,
    create,
    edit,
    remove
}
