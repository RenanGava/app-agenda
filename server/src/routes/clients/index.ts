import { Router } from 'express'
import { IsAuthenticated } from '../../middlewares/IsAutheticated';
import { createClientController } from '../../modules/clients/useCases/create';


const clientsRouter = Router();


clientsRouter.post("/create", IsAuthenticated, createClientController.handle)



export { clientsRouter }