import dayjs from "dayjs";
import { prisma } from "../../../../prisma/prisma";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { GenerateRefreshToken } from "../../../../JWT/GenerateRefreshToken";
import { GenerateTokenJWT } from "../../../../JWT/GenerateToken";


class RefreshTokenUseCase{

    async execute(tokenId: string){

        const userRepository = UserRepository.getInstance()

        const refreshToken = await prisma.refresh_Token.findFirst({
            where:{
                id: tokenId
            },include:{
                user: true
            }
        })


        const refershTokenIsExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn))

        if(refershTokenIsExpired){
            console.log('teste');
            await userRepository.deleteRefreshToken(refreshToken.id)

            const newRefresToken = await GenerateRefreshToken({
                userId: refreshToken.userId,
                duration: 15
            })
            const tokenJWT = await GenerateTokenJWT({
                id: refreshToken.user.id,
                email: refreshToken.user.email
            })
           
            return {
                newRefresToken, 
                tokenJWT
            }
        }
        
    }
}

export { RefreshTokenUseCase }