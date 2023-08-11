import { UserRepository } from "../../repositories/implementation/UserRepository";



class LoginUserUseCase{

    async execute(email: any){

        const loginUserRepository = UserRepository.getInstance()

        const user = await loginUserRepository.loginUser(email)

        return user
    }
}

export { LoginUserUseCase }