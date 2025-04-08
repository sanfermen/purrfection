import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Cat from "../cat.js"
import Appointment from "../appointment.js"

// Modelo de la tabla User
const User = connection.define("user", {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING(80), //para tener en cuenta el hash
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM("client", "caretaker"),
        allowNull: false,
        defaultValue: "client",
    },
})

// Relaciones 
User.hasMany(Cat, {foreignKey:"user_id"});
Cat.belongsTo(User, {foreignKey: "user_id"});

User.hasMany(Appointment, {foreignKey: "user_id"});
Appointment.belongsTo(User, {foreignKey: "user_id"});

export default User;
