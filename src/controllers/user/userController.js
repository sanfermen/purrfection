import User from "../../models/user.js";
import Cat from "../../models/cat.js";
import Appointment from "../../models/appointment.js";
import { UserNameNotProvided, UserEmailNotProvided, UserPasswordNotProvided, UserRoleIncorrect 
  } from "../../utils/errors.js";

async function getByID(id) {
        const user = await User.findByPk(id, {
            include: [Cat, Appointment]
        });
        return user;
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


async function getProfile(id) {
  try {
    const user = await User.findByPk(id);
    return user; 
  } catch (error) {
    throw error;
  }
}

export {
    getByID,
    edit,
    remove,
    getProfile
}

export default {
    getByID,
    edit,
    remove,
    getProfile
};