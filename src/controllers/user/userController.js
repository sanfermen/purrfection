import User from "../../models/user.js";
import Cat from "../../models/cat.js";
import Appointment from "../../models/appointment.js";
import { UserNameNotProvided, UserEmailNotProvided, UserPasswordNotProvided, UserRoleIncorrect 
  } from "../../utils/errors.js";

async function getByID() {
        const user = await User.findByPk(id, {
            include: [Cat, Appointment]
        });
        return user;
}

async function create(data) {       //Esto lo hizo el francés :(
        data.creation_date = new Date();
  
        if (!data.name) {
            throw new UserNameNotProvided();
          }
          
          if (!data.email) {
            throw new UserEmailNotProvided();
          }
          
          if (!data.password) {
            throw new UserPasswordNotProvided();
          }
          
          data.role = data.role ? data.role.toLowerCase() : "cliente";
          const validRoles = ["cliente", "purrfesional"];
          
          if (!validRoles.includes(data.role)) {
            throw new UserRoleIncorrect();
          }
          
          const response = await User.create(data);
          return response;
        }

async function edit(id,data) {
    if (data.role) {
        data.role = data.role.toLowerCase();
        const validRoles = ["cliente", "purrfesional"];
        
        if (!validRoles.includes(data.role)) {
          throw new UserRoleIncorrect();
        }
      }
      
      const result = await User.update(
        data,
        {
          where: {
            user_id: id
          }
        }
      );
      return result;
    }

async function remove(id) {
        const response = await User.destroy({
            where: {
                user_id: id
            }
        });
        return response;
}

export {
    getByID,
    create,
    edit,
    remove,
}

export default {
    getByID,
    create,
    edit,
    remove,
};