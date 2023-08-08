import { Permissions } from "@prisma/client";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { User as UserPrisma } from '@prisma/client'

interface IRequest{
    name: string, 
    email: string, 
    password: string
    permission: Permissions
}

class CreateUserUseCase{

    constructor(private createUserRepository: IUserRepository){}

    public async execute({ email, name, password, permission }:IRequest): Promise<UserPrisma>{
        
        const user = await this.createUserRepository.create({ email, name, password, permission })

        return user
    }
}


export { CreateUserUseCase }