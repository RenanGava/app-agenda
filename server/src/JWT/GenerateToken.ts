import { sign } from 'jsonwebtoken'

interface GenerateTokenJWTProps{
    id: string,
    email: string
}

async function GenerateTokenJWT({ id, email }: GenerateTokenJWTProps): Promise<string>{

    const token = sign({
        email: email
    }, process.env.SECRET_JWT, {
        subject: id,
        expiresIn: '15s'
    })

    return token;
}

export { GenerateTokenJWT }

