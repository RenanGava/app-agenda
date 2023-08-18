import { Permissions, User as UserPrisma, Refresh_Token } from '@prisma/client';
import { User } from '../../model/User'


interface IUserDTO {
    name: string;
    email: string;
    password?: string;
    permission?: Permissions
}

interface IUserRepository {
    create({ name, email, password, permission }: IUserDTO): Promise<UserPrisma>;
    findByEmail(email: string): Promise<UserPrisma | null>;
    findRefreshToken(userId: string): Promise<Refresh_Token | null>
    deleteRefreshToken(id: string): Promise<Refresh_Token>
}



export { IUserDTO, IUserRepository }