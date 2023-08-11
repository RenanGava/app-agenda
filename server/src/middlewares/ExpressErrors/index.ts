import { NextFunction, Request, Response } from "express";



export function ExpressErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    next(err)

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

}