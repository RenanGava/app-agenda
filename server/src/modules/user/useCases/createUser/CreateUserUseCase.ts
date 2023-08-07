import { Permissions } from "@prisma/client";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

interface IRequest{
    name: string, 
    email: string, 
    password: string
    permission: Permissions
}

class CreateUserUseCase{

    constructor(private createUserRepository: UserRepository){}

    public async execute({ email, name, password, permission }:IRequest): Promise<void>{

        console.log('Dentro do Execute');
        this.createUserRepository.create({ email, name, password, permission })
    }
}


export { CreateUserUseCase }