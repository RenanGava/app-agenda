import { User } from "../../model/User";
import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../../../prisma/prisma";

class UserRepository implements IUserRepository {

    private static INSTANCE: UserRepository

    public static getInstance():UserRepository{

        if(!UserRepository.INSTANCE){

            UserRepository.INSTANCE = new UserRepository()
                        
        }

        return UserRepository.INSTANCE
    }


    // 
    public async create({ name, email, password, permission }: IUserDTO): Promise<void> {

        console.log("dentro do create");
        
        // const user = new User()

        // const findUsers = await prisma.user.findMany()

        // if(findUsers.length < 0){

        //     permission = "SUPER_ADMIN"
        //     console.log(permission);
            
        //     // const createUser = await prisma.user.create({
        //     //     data:{
        //     //         email: email,
        //     //         name: name,

        //     //     }
        //     // })
        // }

        // const userAlreadyExists = await this.findByEmail(email)

        // if (userAlreadyExists) {
        //     throw new Error('User already exists!')
        // }

        
        // const createUser = await prisma.user.create()
    }

    public async findByEmail(email: string): Promise<User> {
        const user = new User()
        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            Object.assign(user, {
                id: findUser?.id,
                email: findUser?.email,
                name: findUser?.name,
                password: findUser?.password,
                permission: findUser?.permission,
                createdAt: findUser?.createdAt
            })

        } catch (err) {
            console.log(err);
        }

        return user
    }
}


export { UserRepository }