import { User } from "../../model/User";
import { IUserDTO, IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../../../prisma/prisma";

class UserRepository implements IUserRepository {


    create({ name, email, password }: IUserDTO): void {

    }

    async findByEmail(email: string): Promise<User> {
        const user = new User()
        try{
            const findUser = await prisma.user.findUnique({
                where:{
                    email: email
                }
            })

            user.id = findUser?.id
            user.email = findUser?.email
            user.name = findUser?.name
            user.password = findUser?.password
            user.permission = findUser?.permission
            user.createdAt = findUser?.createdAt

        }catch(err){
            console.log(err);
        }

        return user
    }
}


export { UserRepository }