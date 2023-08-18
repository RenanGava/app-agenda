import { GenerateRefreshToken } from "../../../../JWT/GenerateRefreshToken";
import { GenerateTokenJWT } from "../../../../JWT/GenerateToken";
import { UserRepository } from "../../repositories/implementation/UserRepository";



class LoginUserUseCase {

    async execute(email: any) {

        const loginUserRepository = UserRepository.getInstance()

        const user = await loginUserRepository.findByEmail(email)

        if (!user) {
            throw new Error('User Not Exists')
        } else {

            const token = await GenerateTokenJWT({
                id: user.id,
                email: user.email
            })


            const refreshTokenAlreadyExists = await loginUserRepository.findRefreshToken(user.id)

            if (!refreshTokenAlreadyExists) {
                const refreshToken = await GenerateRefreshToken({
                    userId: user.id,
                    duration: 15
                })

                return {
                    user,
                    token,
                    refreshToken
                }
            } else {

                await loginUserRepository.deleteRefreshToken(
                    refreshTokenAlreadyExists.id
                )
                
                const refreshToken = await GenerateRefreshToken({
                    userId: user.id,
                    duration: 15
                })

                return {
                    user,
                    token,
                    refreshToken
                }
            }

        }

    }
}

export { LoginUserUseCase }