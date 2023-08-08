import { IUserRepository } from "../../repositories/interfaces/IUserRepository";



class LoginUserUseCase{

    constructor(private loginUserRepository: IUserRepository){}

    async execute(email: any){
        console.log('Chegou', email);
        
    }
}

export { LoginUserUseCase }