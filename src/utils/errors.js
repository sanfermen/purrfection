//ERRORES DE USUARIO

class UserNameNotProvided extends Error{
    constructor(){
        super("Nombre de usuario no introducido");
        this.statusCode = 400;
    }
}
class UserEmailNotProvided extends Error {
    constructor(){
        super("Email no introducido");
        this.statusCode = 400;
    }
}
class UserPasswordNotProvided extends Error{
    constructor(){
        super("Contraseña no introducida");
        this.statusCode = 400;
    }
}
class UserRoleIncorrect extends Error {
    constructor(){
        super("El rol de usuario tiene que ser cliente o purrfesional");
        this.statusCode = 400;
    }
}


// ERRORES DE APPOINTMENT

class AppointmentDateNotProvided extends Error {
    constructor(){
        super("Faltan las fechas de la solicitud");
        this.statusCode = 400;
    }
}
class AppointmentDescriptionNotProvided extends Error{
    constructor(){
        super("Falta la descripción de la solicitud");
        this.statusCode = 400;
    }
}

// ERRORES DE GATO

class CatNameNotProvided extends Error{
    constructor(){
        super("Nombre del michi no introducido");
        this.statusCode = 400;
    }
}
class CatAgeNotProvided extends Error {
    constructor(){
        super("Edad del michi no introducida");
        this.statusCode = 400;
    }
}
class CatNeuterNotProvided extends Error{
    constructor(){
        super("No has especificado si tu michi está castrado");
        this.statusCode = 400;
    }
}
class CatNeedsNotProvided extends Error {
    constructor(){
        super("No has especificado las necesidades especiales de tu michi");
        this.statusCode = 400;
    }
}


// EXPORTS
export {
    UserEmailNotProvided,
    UserNameNotProvided,
    UserPasswordNotProvided,
    UserRoleIncorrect,
    AppointmentDateNotProvided,
    AppointmentDescriptionNotProvided,
    CatAgeNotProvided,
    CatNameNotProvided,
    CatNeedsNotProvided,
    CatNeuterNotProvided
}