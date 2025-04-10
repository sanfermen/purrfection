import bcrypt from "bcrypt";

// HASHEAR LA CONTRASEÑA
async function hash(password) {
    const result = await bcrypt.hash(password, 10); //aplica el hash 10 veces para que sea más seguro
    return result;
}

// COMPROBAR SI LA CONTRASEÑA INTRODUCIDA ES CORRECTA
async function compare(password, hash) { //comprueba lo introducido por el user con el hash
    const result = await bcrypt.compare(password, hash)
    return result;
}

export {
    hash,
    compare
}