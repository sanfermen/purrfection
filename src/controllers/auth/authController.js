import User from "../../models/user.js";
import { hash, compare } from "../../utils/bcrypt.js";
import { UserEmailAlreadyExists, UserEmailNotProvided, UserInvalidCredentials, UserNameNotProvided, UserPasswordNotProvided, UserRoleIncorrect } from "../../utils/errors.js";


//REGISTRARSE
async function register(userData) {
    //si no hay nombre
    if (!userData.name) {
        throw new UserNameNotProvided();
    }
    //si no hay email
    if (!userData.email) {
        throw new UserEmailNotProvided();
    }
    //si no hay contraseña
    if (!userData.password) {
        throw new UserPasswordNotProvided();
    }
    //si el rol me lo das en mayúsculas, lo paso a minus y si no me das nada, lo pongo client por defecto
    userData.role = userData.role ? userData.role.toLowerCase() : "client";
    const roles = ["client", "caretaker"];
    //si tu rol no es ninguno de los de arriba, error
    if (!roles.includes(userData.role)) {
        throw new UserRoleIncorrect();
    }
    // TODO passwordConfirm meter dos veces la contraseña para ver si coinciden los dos
    //si el nuevo usuario que estás intentando crear ya existe
    const oldUser = await User.findOne({
        where: {
            email: userData.email
        }
    })
    if (oldUser) {
        throw new UserEmailAlreadyExists();
    }
    //hashear la contraseña
    const hashedPassword = await hash(userData.password);
    userData.password = hashedPassword;
    const result = await User.create(userData);

    return result;
}

//LOGGEARSE
async function login(email, password) {
    //si no hay email
    if (!email) {
        throw new UserEmailNotProvided();
    }
    //si no hay contraseña
    if (!password) {
        throw new UserPasswordNotProvided();
    }
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (!user) {
        throw new UserInvalidCredentials();
    }
    const isSamePassword = await compare(password, user.password);
    if (isSamePassword) { // si la contraseña es correcta 
        return user;
    } else {
        throw new UserInvalidCredentials();
    }
}

export default {
    register,
    login,
}