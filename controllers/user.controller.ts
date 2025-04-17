require("dotenv").config();
import { Request,Response,NextFunction } from "express";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import  { CatchAsyncErrors } from "../utils/CatchAsyncErrors";
import jwt, { Secret } from "jsonwebtoken";
import ejs from "ejs";

// Register a user => /api/v1/register
interface IRegisterBody{
    name:string;
    email:string;
    password:string;
    avatar?:string;
}

export const registrationUser = CatchAsyncErrors(async (req:Request,res:Response,next:NextFunction)=>{
    try{
const {name,email,password} = req.body;
const isEmailExist = await userModel.findOne({email});
if(isEmailExist){
    return next(new ErrorHandler("User already exists",400));
};

const user:IRegisterBody={
    name,
    email,
    password,
    
}
const activationToken = createActivationToken(user);
const activationCode = activationToken.activationCode;
const data = {user: {name:user.name},activationCode};
const html = await ejs.renderFile(
});

interface IActivationToken{
    token:string;
    activationCode:string;
}

export const createActivationToken = (user:any): IActivationToken => {
const activationCode = Math.floor(100000 + Math.random() * 9000).toString();
const token = jwt.sign({user,activationCode},process.env.JWT_SECRET_KEY as Secret,{expiresIn:"5m"});
return {token,activationCode};
}