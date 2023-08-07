import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';
import { TypesJWT } from '../../../../Types/TypesJWT';



class CreateUserController {


    constructor(private createUserUseCase: CreateUserUseCase) { }


    async handle(request: Request<TypesJWT>, response: Response) {

        const { name, email, password, permission } = request.body

        // new CreateUserUseCase(UserRepository.getInstance()).execute({ name, email, password, permission })
        const user = await this.createUserUseCase.execute({ name, email, password, permission })
        

        response.status(201).json(user)

    }
}

export { CreateUserController }