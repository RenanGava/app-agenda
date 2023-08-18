import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../../../prisma/prisma";
import { Permissions, Refresh_Token, User as UserPrisma } from '@prisma/client'


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

    public async findRefreshToken(userId: string): Promise<Refresh_Token | null>{

        const refresh_Token = await prisma.refresh_Token.findUnique({
            where:{
                userId: userId
            }
        })

        return refresh_Token
    }

    public async deleteRefreshToken(id: string){

        const refreshToken = await prisma.refresh_Token.delete({
            where:{
                id: id,
            }
        })
        
        return refreshToken
    }

}


export { UserRepository }