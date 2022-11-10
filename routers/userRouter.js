import express from 'express';
import { registerUser, login } from '../controllers/userController.js';

//create a router
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);




export default router;