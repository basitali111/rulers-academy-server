import  express, { Request, Response } from 'express';
import { registrationUser ,activateUser} from '../controllers/user.controller';
const UserRouter = express.Router();

UserRouter.post('/registration', registrationUser);
UserRouter.post('/activate-user', activateUser);

export default UserRouter;