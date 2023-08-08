import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";



class LoginUserController{

    constructor(private loginUserUseCase: LoginUserUseCase){}

    async hanlde(request: Request, response: Response){

        const { email } = request.query

        this.loginUserUseCase.execute(email)
        return response.json({ok: true})
    }
}

export { LoginUserController }