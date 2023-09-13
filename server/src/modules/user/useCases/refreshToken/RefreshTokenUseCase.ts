import dayjs from "dayjs";
import { prisma } from "../../../../prisma/prisma";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { GenerateRefreshToken } from "../../../../JWT/GenerateRefreshToken";
import { GenerateTokenJWT } from "../../../../JWT/GenerateToken";

interface RefreshTokenParams {
    userId?: string,
    tokenId?: string
}

class RefreshTokenUseCase {

    async execute({ tokenId, userId }: RefreshTokenParams) {

        const userRepository = UserRepository.getInstance()

        const getRefreshToken = await prisma.refresh_Token.findFirst({
            where: {
                OR: [
                    { userId: userId },
                    { id: tokenId }
                ]
            }, include: {
                user: true
            }
        })


        const refershTokenIsExpired = dayjs().isAfter(dayjs.unix(getRefreshToken.expiresIn))

        if (refershTokenIsExpired) {
            
            await userRepository.deleteRefreshToken(getRefreshToken.id)

            const newRefresToken = await GenerateRefreshToken({
                userId: getRefreshToken.userId,
                duration: 15
            })
            const tokenJWT = await GenerateTokenJWT({
                id: getRefreshToken.user.id,
                email: getRefreshToken.user.email
            })

            return {
                newRefresToken,
                tokenJWT
            }
        } else {
            const JWTtoken = await GenerateTokenJWT({
                id: getRefreshToken.user.id,
                email: getRefreshToken.user.email
            })

            const refreshToken = {
                id: getRefreshToken.id,
                expiresIn: getRefreshToken.expiresIn,
                userId: getRefreshToken.userId
            }

            return {
                refreshToken,
                JWTtoken
            }
        }

    }
}

export { RefreshTokenUseCase }