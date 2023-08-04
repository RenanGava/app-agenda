import { Permissions } from '@prisma/client';
import { User } from '../../model/User'


interface IUserDTO{
    name: string;
    email: string;
    password?: string;
    permission: Permissions
}

interface FyndByEmail{
    email: string
}

//{ name, email, password, permission }: IUserDTO

interface IUserRepository {
    create(): Promise<void>
    findByEmail(email: string): Promise<User>
}



export { IUserDTO, IUserRepository }