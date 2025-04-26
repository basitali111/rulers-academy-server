import  express, { Request, Response } from 'express';
import { registrationUser ,activateUser, loginUser, logoutUser} from '../controllers/user.controller';
const UserRouter = express.Router();

UserRouter.post('/registration', registrationUser);
UserRouter.post('/activate-user', activateUser);
UserRouter.post('/login',loginUser)
UserRouter.get('/logout',logoutUser)

export default UserRouter;