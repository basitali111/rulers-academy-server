import express, { Request, Response } from "express";
import {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  socialAuth,
  updateUserInfo,
  updatePassword,
  updateProfileImage,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const UserRouter = express.Router();

UserRouter.post("/registration", registrationUser);
UserRouter.post("/activate-user", activateUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/logout", isAuthenticated ,authorizeRoles('admin'), logoutUser);
UserRouter.get("/refresh",updateAccessToken);
UserRouter.get("/me",isAuthenticated,getUserInfo)
UserRouter.post("/social-auth",socialAuth)
UserRouter.put("/update-user-info",isAuthenticated,updateUserInfo)
UserRouter.put("/update-user-password",isAuthenticated,updatePassword)
UserRouter.put("/update-user-avatar",isAuthenticated,updateProfileImage)
export default UserRouter;
