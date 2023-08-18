import { Router } from "express";
import { createUserController } from "../../modules/user/useCases/createUser";
import { loginUserController } from "../../modules/user/useCases/loginUser";
import { IsAuthenticated } from "../../middlewares/IsAutheticated";
import { rerfeshTokenController } from "../../modules/user/useCases/refreshToken";

const userRouter = Router()


// create user
userRouter.post('/', createUserController.handle)

// login user 
userRouter.post('/login', loginUserController.hanlde)

// refresh token user IsAuthenticated,
userRouter.get('/refresh-token',  rerfeshTokenController.handle)

export { userRouter }