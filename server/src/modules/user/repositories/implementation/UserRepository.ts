import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../../../prisma/prisma";
import { User as UserPrisma } from '@prisma/client'


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

        console.log("dentro do create");

        const findUsers = await prisma.user.findMany()

        if (findUsers.length <= 0) {

            permission = "SUPER_ADMIN"
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
                    password: password
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
}


export { UserRepository }