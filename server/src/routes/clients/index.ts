import { Router } from 'express'
import { IsAuthenticated } from '../../middlewares/IsAutheticated';
import { createClientController } from '../../modules/clients/useCases/create';
import { getClientsController } from '../../modules/clients/useCases/getClients';
import { deleteClientController } from '../../modules/clients/useCases/delete';
import { updateClientController } from '../../modules/clients/useCases/update';


const clientsRouter = Router();


clientsRouter.post("/create", IsAuthenticated, createClientController.handle)
clientsRouter.get("/list", IsAuthenticated, getClientsController.handle)
clientsRouter.delete("/delete", IsAuthenticated, deleteClientController.handle)
clientsRouter.put("/update", IsAuthenticated, updateClientController.handle)



export { clientsRouter }

