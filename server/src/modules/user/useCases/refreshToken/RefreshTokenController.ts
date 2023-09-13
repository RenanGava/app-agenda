import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";
import { RequestExpress } from "../../../../Types/ExpressTypes";





class RefresTokenController {

    async handle(request: RequestExpress, response: Response) {

        const { refreshToken } = request.body
        const { userId } = request

        // console.log(userId);


        const refreshTokenUseCase = new RefreshTokenUseCase()

        const authTokens = await refreshTokenUseCase.execute({
            tokenId: refreshToken,
            userId: userId
        })

        return response.json(authTokens)

    }
}
export { RefresTokenController }