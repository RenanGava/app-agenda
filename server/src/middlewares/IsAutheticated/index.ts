import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { RequestExpress } from "../../Types/ExpressTypes";





export async function IsAuthenticated(request: RequestExpress, response: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>{

    const authToken = request.headers['authorization']


    if(!authToken){
        return response.status(401).json({
            message: "token is missing!"
        })
    }

    const [, token] = authToken.split(' ')

    try{
        const { sub } = verify(token, process.env.SECRET_JWT)
        request.userId = sub.toString()

        return next()
    }catch(err){
        return response.status(401).json({
            message: 'token invalid!',
        })
    }
}