import { Request, Response, Router } from 'express'
import { createUserController } from '../modules/user/useCases/createUser'


const router = Router()

router.post('/', createUserController.handle)


export { router }