class UserNameNotProvided extends Error{
    constructor(){
        super("User name not provided");
        this.statusCode = 400;
    }
}

class IncorrectUserSize extends Error{
    constructor(){
        super("User size must be 'small', 'medium' or 'large'");
        this.statusCode = 400;
    }
}

class UseSomethingNotFoundd extends Error{
    constructor(){
        super("You dont know ni qué poner aquí");
        this.statusCode = 400;
    }
}

export {
    UserNameNotProvided,
    IncorrectUserSize,
    
}