import { DataTypes, STRING } from "sequelize";
import connection from "../config/sequelize.js";

//modelo de la tabla Appointment
const Appointment = connection.define("appointment", {
    appointment_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    creation_date:{
        type: DataTypes.DATE,
    }
})

export default Appointment;