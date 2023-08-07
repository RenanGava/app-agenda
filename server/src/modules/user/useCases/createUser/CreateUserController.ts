import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';
import { UserRepository } from '../../repositories/implementation/UserRepository';
import { TypesJWT } from '../../../../Types/TypesJWT';



class CreateUserController {


    constructor(private createUserUseCase: CreateUserUseCase) { }


    async handle(request: Request<TypesJWT>, response: Response) {

        const { name, email, password, permission } = request.body

        
        // this.createUserUseCase.execute()
        // console.log('teste');
        // new CreateUserUseCase(UserRepository.getInstance()).execute({ name, email, password, permission })
        this.createUserUseCase.execute({ name, email, password, permission })
        

        response.status(201).json(request.body)

    }
}

export { CreateUserController }