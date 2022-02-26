import "express-async-errors";
import express, { NextFunction,Response, Request} from 'express';
import { router } from './router';
const app = express();

app.use(express.json());

app.use(router);

app.use((error:Error, request:Request, response:Response, nesxt:NextFunction) =>{
    return response.json({
        status: "Error",
        message: error.message,
    });
} );

app.listen(3333,()=>{console.log("running on port 33333")})