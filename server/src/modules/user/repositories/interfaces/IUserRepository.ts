import { User } from '../../model/User'


interface IUserDTO{
    name: string;
    email: string;
    password?: string
}

interface FyndByEmail{
    email: string
}


interface IUserRepository {
    create({ name, email, password }: IUserDTO): void
    findByEmail(email: string): Promise<User>
}



export { IUserDTO, IUserRepository }