import { Request, Response, Router } from 'express'
import { createUserController } from '../modules/user/useCases/createUser'
import { TypesJWT } from '../Types/TypesJWT'
import { userRouter } from './user'


const router = Router()

// user router
router.use('/user',userRouter)


export { router }