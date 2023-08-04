import { UserRepository } from "../../repositories/implementation/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const createUserRepository = UserRepository.getInstance()

const createUserUseCase = new CreateUserUseCase(createUserRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }