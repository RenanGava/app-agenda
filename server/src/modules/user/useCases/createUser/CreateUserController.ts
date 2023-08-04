import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';


interface TextType{
    user_id: string
}

class CreateUserController {


    constructor(private createUserUseCase: CreateUserUseCase) { }


    async handle(request: Request<TextType>, response: Response) {

        const { name, email, password, permission } = request.body

        // { name, email, password, permission }
        // this.createUserUseCase.execute()
        console.log('teste');
        

        response.status(201).json(request.body)

    }
}

export { CreateUserController }