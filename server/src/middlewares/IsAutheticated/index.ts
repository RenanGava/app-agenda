import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'





export function IsAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers['authorization']


    if(!authToken){
        return response.status(401).json({
            message: "token is missing!"
        })
    }

    const [, token] = authToken.split(' ')

    try{
        verify(token, process.env.SECRET_JWT)

        return next()
    }catch(err){
        return response.status(401).json({
            message: 'token invalid!',
        })
    }
}