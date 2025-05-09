import express, { Request, Response } from "express";
import {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const UserRouter = express.Router();

UserRouter.post("/registration", registrationUser);
UserRouter.post("/activate-user", activateUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/logout", isAuthenticated ,authorizeRoles('admin'), logoutUser);

export default UserRouter;
