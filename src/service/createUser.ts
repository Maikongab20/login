import { Client } from '../database/prismaClient'
import { hash } from "bcryptjs"

interface User{
    name: string;
    password: string;
    cpf: string;

}


class CreateUser{

    async execute({name, password, cpf}:User){

        const userAlredyExists = await Client.user.findFirst({
            where: {
                name
            }
        })

        if(userAlredyExists){
            throw new Error("user alredy exist !");
        }
        const passwordhash = await hash(password,8);

        const user = await Client.user.create({
            data:{
                name,
                password : passwordhash,
                cpf
            }
        })

        return user;
    }

}

export { CreateUser }