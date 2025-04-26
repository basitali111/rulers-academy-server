import {Request, Response, NextFunction} from 'express';
import { CatchAsyncErrors } from '../utils/CatchAsyncErrors';

export const isAuthenticated = CatchAsyncErrors((req: Request, res: Response, next: NextFunction) => {

try{
    const access_token = req.cookies.access_token;

    
}
catch(error:any){

}


}  )  