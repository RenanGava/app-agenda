import { Permissions } from "@prisma/client";
import { User as UserPrisma } from '@prisma/client'
import { UserRepository } from "../../repositories/implementation/UserRepository";

interface IRequest{
    name: string, 
    email: string, 
    password: string
    permission: Permissions
}

class CreateUserUseCase{

    public async execute({ email, name, password, permission }:IRequest): Promise<UserPrisma>{
        
        const createUserRepository = UserRepository.getInstance()
        const user = await createUserRepository.create({ email, name, password, permission })

        return user
    }
}


export { CreateUserUseCase }