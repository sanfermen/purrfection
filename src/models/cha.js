import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla intermedia CHA
const Cat_Has_Appointment = connection.define("cat_has_appointment", {
    cat_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    appointment_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})

// Relaciones
Cat_Has_Appointment.belongsTo(Cat, {foreignKey:"cat_id"});
Cat.hasMany(Cat_Has_Appointment, {foreignKey: "cat_id"});

Cat_Has_Appointment.belongsTo(Appointment, {foreignKey: "appointment_id"});
Appointment.hasMany(Cat_Has_Appointment, {foreignKey: "appointment_id"});

export default Cat_Has_Appointment;
