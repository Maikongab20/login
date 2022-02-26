import { Request, Response } from "express";
import { AuthenticateUser } from "../authenticateUser/authenticateUser";







class AuthenticateUserController{

    async handle(requeste: Request, response:Response){

        const { name, password } = requeste.body;

        const authenticateUserController = new AuthenticateUser()

        const token = await authenticateUserController.execute({
            name, password
        });

        return response.json(token);
    }

    
}



export { AuthenticateUserController }