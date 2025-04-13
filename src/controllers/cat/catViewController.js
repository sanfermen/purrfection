
import catController from "./catController.js";
import Cat from "../../models/cat.js";


//vista de todos los gatos
async function getAll(req, res) {
    try {
    const cats = await catController.getAll(); //es getAll porque no está llamando al modelo sino al controlador
    res.render("cats/list",{cats}) //route - asumiendo que habrá una ruta cats/list, esta es la ruta de la vista y debo indicar qué es lo que espero que renderice esa vista 
    } catch (error) {
        console.error(error);
        res.render("layout",  {error: "Internal server error"})
    }
}

// mostrar un gato específico por su id   
async function getByID(req,res){
    try {
        const id = req.params.id;
        const cat = await catController.getByID(id);
        if (!cat) {
            res.render("layout",{error: "There is no cat for that id"});   
            return; 
        }
        res.render("cat/show",{cat}); 
    } catch (error) {
        console.error(error);
        res.render("layout",  {error: "Internal server error"}) //route 
    }  
}

//mostrar el form
async function createForm(req, res) {  
    try { 
        const error = req.query.error;
        const cats = await Cat.findAll(); 
        res.render("cat/create", {cats, error }); //route - 
    } catch (error) {
        console.error(error);
        res.render("layout", {error: "Internal server error"}) //route 
    }
}

//crear un gato
async function create(req,res){
    try {  
        const response = await Cat.create(req.body);
        res.redirect("/cat"); //route    
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/cat/new?error=" + error.message)
        } else {
            res.redirect("/cat/new?error=Internal+server+error")
        }

    }
    
}

//vistas del formulario para edición de un gato
async function editForm(req,res){  
    try {
        const id = req.params.id;
        const error = req.query.error;
        const cat = await catController.getByID(id);
        if(!cat){
            res.redirect("/cat") //route 
        }
        const cats = await Cat.findAll();
        res.render("cat/edit", { cat, error});//route
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

//vistas para editar un gato
async function edit(req,res){
    const id = req.params.id;
    try {
        const result = await catController.edit(id, req.body)
        res.redirect("/cat/" + id); //route 
    } catch(error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/cat/${id}/edit?error=` + error.message)
        } else {
            res.render("layout", { error: "Internal server error" });
        }        
    }
}

async function remove(req,res){
    try{
        const id = req.params.id;
        const response = await catController.remove(id);//remove es la función de sequelize
        res.redirect("/cat"); //route 
    }catch(error){
        res.render("layout", { error: "Internal server error" }); //route 
    }
}
/* 
export{
    getAll,
    getByID,
    createForm,
    create,
    edit,
    remove
} */

export default{
    getAll,
    getByID,
    editForm,
    createForm,
    create,
    edit,
    remove
}
