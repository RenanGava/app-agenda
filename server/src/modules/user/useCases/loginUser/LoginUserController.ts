import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { decode } from 'jsonwebtoken'



class LoginUserController{


    async hanlde(request: Request, response: Response){

        const { email } = request.query

        const loginUserUseCase = new LoginUserUseCase()

        const user = await loginUserUseCase.execute(email)
        
        return response.json(user)
    }
}

export { LoginUserController }