
import { BOOLEAN } from "sequelize";
import Cat from "../../models/cat.js";
import User from "../../models/user.js";


//obtener todos los gatos - si tuviermos filtros de búsqueda se pasarían aquí
async function getAll() {  //ahora es una función
    const cats = await Cat.findAll({
        include: User //sólo se incluye si nos interesa ver el usuario al que corresponde ese gato, si no se puede dejar vacío
    });
    return cats;
}

// obtener un gato específico por su id 
async function getByID(id){ //ese id se obtendrá ya no desde parámetros sino desde el api controller que los obtendrá
    const cat = await Cat.findByPk(id,{ 
        include: User
    });
    return cat;
}


async function create(data){ //se pueden pasar los args 1 a 1 o en un objeto data
    if(!data.name){
        throw new CatNameNotProvided();
    }
    if(!data.age){
        throw new CatAgeNotProvided();
    }
    if (!data.neuter) {
        throw new CatNeuterNotProvided();
    }
    if (!data.special_needs) {
        throw new CatNeedsNotProvided();
    }
    const response = await Cat.create(data);
    return response;
}

//editar un gato
async function edit(id, data){
    
    if (!typeof data.neuter === BOOLEAN) {
            throw new NeuterDataTypeError(); //TODO CAMBIAR EL ERROR
    }
    if (!typeof data.special_needs === BOOLEAN) {
        throw new NeedsDataTypeError(); //TODO CAMBIAR EL ERROR
}
    const result = await Cat.update(
        data, {
            where: {
                cat_id: id
            }
        }
    )

    return result;
}

async function remove(id){
    const response  = await Cat.destroy({
        where:{
            cat_id: id 
        }
    });

    return response;
}


//Export sólo a modo de ejemplo, no lo vamos a usar en este caso pero no va a dar error si se ponen ambos, el normal y el default
/* export {  
    getAll,
    getByID,
    create,
    edit,
    remove
} */

export default { //permite identificar a la función indicando dónde está definida, ej: catController.getAll() aunque haya otras con el mismo nombre refiere sólo a esta
    getAll,
    getByID,
    create,
    edit,
    remove
}
