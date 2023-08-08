import { Request, Response, Router } from "express";
import { TypesJWT } from "../../Types/TypesJWT";
import { createUserController } from "../../modules/user/useCases/createUser";
import { loginUserController } from "../../modules/user/useCases/loginUser";

const userRouter = Router()


// create user
userRouter.post('/', (request: Request, response: Response) =>{
    createUserController.handle(request, response)
})

// login user
userRouter.use('/login:email', (request: Request, response: Response) => {
    loginUserController.hanlde(request, response)
})

export { userRouter }