import { User } from "../../model/User";


interface IUserDTO{
    name: string;
    email: string;
    password?: string
}


interface IUserRepository {
    
    create({ name, email, password }: IUserDTO): void
}



export { IUserDTO, IUserRepository }