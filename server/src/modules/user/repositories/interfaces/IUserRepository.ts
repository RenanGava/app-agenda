import { Permissions, User as UserPrisma } from '@prisma/client';
import { User } from '../../model/User'


interface IUserDTO {
    name: string;
    email: string;
    password?: string;
    permission?: Permissions
}

interface UserLogin{
    user: UserPrisma,
    token: string
}


interface IUserRepository {
    create({ name, email, password, permission }: IUserDTO): Promise<UserPrisma>;
    findByEmail(email: string): Promise<UserPrisma | null>;
    loginUser(email: string): Promise<UserLogin | null>
}



export { IUserDTO, IUserRepository, UserLogin }