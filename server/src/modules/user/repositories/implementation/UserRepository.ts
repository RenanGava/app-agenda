import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../../../prisma/prisma";
import { Permissions, User as UserPrisma } from '@prisma/client'


class UserRepository implements IUserRepository {

    private static INSTANCE: UserRepository

    public static getInstance(): UserRepository {

        if (!UserRepository.INSTANCE) {

            UserRepository.INSTANCE = new UserRepository()

        }

        return UserRepository.INSTANCE
    }


    // 
    public async create({ name, email, password, permission }: IUserDTO): Promise<UserPrisma> {

        const findUsers = await prisma.user.findMany()

        if (findUsers.length <= 0) {
            console.log(permission);

            const createUser = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    permission: "SUPER_ADMIN"
                }
            })

            return createUser
        } else {

            const userAlreadyExists = await this.findByEmail(email)


            if (userAlreadyExists) {
                throw new Error('User already exists!')
            }

            const createUser = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    permission: "USER",
                }
            })

            return createUser
        }

    }

    public async findByEmail(email: string): Promise<UserPrisma | null> {

        const findUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        return findUser
    }

    loginUser(email: string): Promise<UserPrisma | null> {
        try {
            const userAlreadyExists = this.findByEmail(email)

            if(!userAlreadyExists){
                throw new Error('User not exists!')
            }else{
                return userAlreadyExists   
            }
        } catch (error) {
            throw error
        }
    
        
    }
}


export { UserRepository }