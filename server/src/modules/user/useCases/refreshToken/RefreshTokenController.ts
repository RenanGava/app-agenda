import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";





class RefresTokenController {

    async handle(request: Request, response: Response) {

        const { refreshToken } = request.body

        const refreshTokenUseCase = new RefreshTokenUseCase()

        const { tokenJWT, newRefresToken } = await refreshTokenUseCase.execute(refreshToken)
        
        return response.json({ tokenJWT, newRefresToken })

    }
}
export { RefresTokenController }