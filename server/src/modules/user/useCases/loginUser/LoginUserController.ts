import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { GenerateRefreshToken } from "../../../../JWT/GenerateRefreshToken";



class LoginUserController{


    async hanlde(request: Request, response: Response){

        const { email } = request.query
        GenerateRefreshToken({
            userId: "cll5kmic10000v3e8p76mtrdi",
            duration: 15
        })

        const loginUserUseCase = new LoginUserUseCase()

        const user = await loginUserUseCase.execute(email)
        // console.log(email);
        
        return response.json(user)
    }
}

export { LoginUserController }