import { db, users } from '../data/config.js';
import createError from 'http-errors';

//to register a user
export const registerUser = async(req, res) => {
    try {
        const newUser = req.body;
        users.push(newUser);
        await db.write();

        res.send('successfully registered! 😃');
    
    } catch (err) {
        //transfer the err to error handler in server.js
        next(err);
    }
}


//to check username and pass for login
export const login = (req, res, next) => {

    try {
        
        const { email, password } = req.body;
        
        if (users.some(user => user.email === email && user.password === password)) {
            res.send('Welcome!')
        
        } else {
            //generate error
            next(createError(401, 'The email or password is not valid'));
            
            //Alternative approach to create an error intentionaly
            // const err = new Error('The email or password  is not valid');
            // err.status = 401;
            // throw err;
        }
    } catch (error) {
        next(error)
    }
}