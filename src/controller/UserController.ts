import { Request, Response } from "express"
import { CreateUser } from "../service/createUser"




class UserController {
    async handle(request:Request, response:Response){
        const { name, password, cpf } = request.body;

        const createUser = new CreateUser();

        const user = await createUser.execute({
            name,
            password,
            cpf
        });

        return response.json(user);
    }
}


export { UserController }