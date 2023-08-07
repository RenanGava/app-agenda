import { Permissions } from '@prisma/client';
import { User } from '../../model/User'


interface IUserDTO{
    name: string;
    email: string;
    password?: string;
    permission: Permissions
}

interface IUserRepository {
    create({ name, email, password, permission }: IUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
}



export { IUserDTO, IUserRepository }