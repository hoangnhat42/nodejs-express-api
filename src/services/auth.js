import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

        const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email, role_code: response[0].role_code}, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        }) : null;

        resolve({
            err: response[1] ? 0 : 1,
            msg: response[1] ? 'User created' : 'User already exists',
            'access_token':  `Bearer ${token}`
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


export const login = ({email,password}) => new Promise(async (resolve, reject) => {
    try {

        const response = await db.User.findOne({
            where: {email},
            raw: true
        });

        const isCheck = response ? bcrypt.compareSync(password, response.password) : false;
        const token = isCheck ? jwt.sign({id: response.id, email: response.email, role_code: response.role_code}, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        }) : null;

        resolve({
            err: token ? 0 : 1,
            msg: token ? 'Login is successfully' : response ? 'Password is incorrect' : 'User is not exists',
            'access_token': token ?  `Bearer ${token}` : null
        })

      
    } catch (error) {
        reject(error);

    }
}
)