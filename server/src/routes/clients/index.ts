import { Router } from 'express'
import { IsAuthenticated } from '../../middlewares/IsAutheticated';
import { createClientController } from '../../modules/clients/useCases/create';
import { getClientsController } from '../../modules/clients/useCases/getClients';


const clientsRouter = Router();


clientsRouter.post("/create", IsAuthenticated, createClientController.handle)
clientsRouter.get("/list",  IsAuthenticated, getClientsController.handle)



export { clientsRouter }