import { DataTypes, STRING } from "sequelize";
import connection from "../config/sequelize.js";

//modelo de la tabla Cat
const Cat = connection.define("cat", {
    cat_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    neuter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    comments: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    special_needs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    breed: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(300),
    },
    user_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})


export default Cat;