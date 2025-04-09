import Cat from "../models/cat.js";
import User from "../models/user.js";


//obtener todos los gatos
async function getAll(req, res) {
    const cats = await Cat.findAll({
        include: User //sólo se incluye si nos interesa ver el usuario al que corresponde ese gato, si no se puede dejar vacío
    });
    //console.log(cats)
    //res.json(cats)   - si quiero ver los datos que se devuelven

    res.render("cats/list",{cats}) //route - asumiendo que habrá una ruta cats/list, esta es la ruta de la vista y debo indicar qué es lo que espero que renderice esa vista 
}

// obtener un gato específico por su id 
async function getByID(req,res){
    const id = req.params.id;
    const cat = await Cat.findByPk(id,{ //pasar aquí el nombre del modelo
        include: User
    });
    //res.json(cat);
    res.render("cat/show",{cat}); // route - la ruta de render es a partir de la carpeta views, no la del router
}

async function createForm(req, res) {  //Sólo renderiza el formulario para crear gatos
    res.render("cat/create"); //route 
}

//crear un gato
async function create(req,res){
    //res.send("Creamos un gato");
    const {name, age, neuter, comments, special_needs, breed, image, user_id} = req.body;
    const creation_date = new Date();
    const response = await Cat.create({
        name:name, 
        age:age, 
        neuter:neuter, 
        comments:comments, 
        special_needs:special_needs, 
        breed:breed, 
        image:image, 
        user_id:user_id
    });
    //res.json(response);
    res.redirect("/cat"); //route 
}

//vistas del formulario para edición de un gato
async function editForm(req,res){
    const id = req.params.id;
    const cat = await Cat.findByPk(id);
    if(!cat){
        res.redirect("/cat") //route 
    }
    
    res.render("cat/edit",{cat,id}); //route - estos son los datos de lo que quiero que rendericen las vistas, en este caso los datos del gato correspondiente a la id pasada por parametros
}  

//editar un gato
async function edit(req,res){
    const id = req.params.id;
    const {name, age, neuter, comments, special_needs, breed, image, user_id} = req.body; //estoy extrayendo esos parámetros del cuerpo de la solicitud, puedo extraer sólo los que hagan falta y permitir sólo modificar, por ejemplo, el nombre y la edad del gato
    const result = await Cat.update(
        {
            name:name, age:age,  //en los que coinciden se puede simplificar la sintaxis
            neuter:neuter, 
            comments:comments, 
            special_needs:special_needs, 
            breed:breed, 
            image:image, 
            user_id:user_id
        },
        {
            where:{
                cat_id:id
            }
        }
    )

     res.redirect("/cat/"+id); //route 
}

async function remove(req,res){
    const id = req.params.id;
    const response  = await Cat.destroy({
        where:{
            cat_id: id //importante que sea el id que hemos cogido de los parámetros de la solcitud
        }
    });

    res.redirect("/cat"); //route 
}

export{
    getAll,
    getByID,
    createForm,
    create,
    edit,
    remove
}
