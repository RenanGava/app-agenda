import { Permissions } from "@prisma/client";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

interface IRequest{
    name: string, 
    email: string, 
    password: string
    permission: Permissions
}

class CreateUserUseCase{

    constructor(private createUserRepository: IUserRepository){}

    // { email, name, password, permission }:IRequest
    async execute(){

        console.log('teste');
        // { email, name, password, permission }
        await this.createUserRepository.create()
    }
}


export { CreateUserUseCase }