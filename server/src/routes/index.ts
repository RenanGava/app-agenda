import { Request, Response, Router } from 'express'
import { createUserController } from '../modules/user/useCases/createUser'
import { TypesJWT } from '../Types/TypesJWT'


const router = Router()

router.post('/', (request: Request<TypesJWT>, response: Response) =>{
    createUserController.handle(request, response)
})


export { router }