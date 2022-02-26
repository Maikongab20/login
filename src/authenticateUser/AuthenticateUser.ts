import { compare } from "bcryptjs"
import { Client } from "../database/prismaClient"
import { sign } from "jsonwebtoken"


interface User{
    name: string;
    password: string;
}


class AuthenticateUser{

    async execute({name, password} : User){

        const userAlreadyExists = await Client.user.findFirst({
            where:{
                name
            }
        });

        if(! userAlreadyExists){
            throw new Error("user or password incorrect");
        }

        const passwordmatches = await compare(password,userAlreadyExists.password);
        
        if(!passwordmatches){
            throw new Error("use or password incorrect");
        }

        const token = await sign({},"fsffsdfewrad",{
            subject: userAlreadyExists.id,
            expiresIn: "20s" 
        });

        return { token }

    }
}

export { AuthenticateUser }