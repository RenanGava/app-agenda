import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';
import { TypesJWT } from '../../../../Types/TypesJWT';



class CreateUserController {

    async handle(request: Request, response: Response) {

        const { name, email, password, permission } = request.body
        const createUserUseCase = new CreateUserUseCase()

        const user = await createUserUseCase.execute({ name, email, password, permission })
        
        response.status(201).json(user)
    }
}

export { CreateUserController }