import  express, { Request, Response } from 'express';
import { registrationUser } from '../controllers/user.controller';
const UserRouter = express.Router();

UserRouter.post('/register', registrationUser);

export default UserRouter;