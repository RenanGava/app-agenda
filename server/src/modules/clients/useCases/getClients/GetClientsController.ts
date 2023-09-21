import { Response } from "express";
import { RequestExpress } from "../../../../Types/ExpressTypes";
import { GetClientsUseCase } from "./GetClientsUseCase";




class GetClientsController {


    async handle(request: RequestExpress, response: Response) {

        const { userId } = request;

        const getClientsUseCase = new GetClientsUseCase();

        const clients = await getClientsUseCase.execute(userId)

        return response.status(200).json(clients)
    }
}

export { GetClientsController }