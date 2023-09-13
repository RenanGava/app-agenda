import { Router } from 'express'
import { userRouter } from './user'
import { clientsRouter } from './clients'


const router = Router()

// user router
router.use('/user', userRouter)
router.use('/clients', clientsRouter)


export { router }