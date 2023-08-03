import { User } from "../../../user/model/User";
import { User as UserType } from '../../model/User'


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
    findByEmail(email: string): UserType
}



export { IUserDTO, IUserRepository }