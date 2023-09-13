import dayjs from "dayjs";
import { prisma } from "../prisma/prisma"
import { Refresh_Token } from "@prisma/client";


interface GenerateRefreshTokenProps {
    userId: string
    duration: number
}

export async function GenerateRefreshToken({ userId, duration }: GenerateRefreshTokenProps):Promise<Refresh_Token> {

    const durationFormated = dayjs().add(duration, 'seconds').unix()

    const generateRefreshToken = await prisma.refresh_Token.create({
        data: {
            userId: userId,
            expiresIn: durationFormated
        }
    })

    return generateRefreshToken

}