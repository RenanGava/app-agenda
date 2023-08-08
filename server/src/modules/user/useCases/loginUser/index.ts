import { UserRepository } from "../../repositories/implementation/UserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";



const loginUserRepository = UserRepository.getInstance()
const loginUserUseCase = new LoginUserUseCase(loginUserRepository)
const loginUserController = new LoginUserController(loginUserUseCase)

export { loginUserController }
