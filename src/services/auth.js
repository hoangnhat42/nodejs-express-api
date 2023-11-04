import db from '../models';
import bcrypt from 'bcryptjs';

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const register = ({email,password}) => new Promise(async (resolve, reject) => {
    try {

        const response = await db.User.findOrCreate({
            where: {email},
            defaults: {
                email,
                password: hashPassword(password)
            }
        });

        resolve({
            err: response[1] ? 0 : 1,
            msg: response[1] ? 'User created' : 'User already exists'
        })

        resolve({
            msg: 'Hello from register service',
            err: 0
        });
    } catch (error) {
        reject(error);

    }
}
)