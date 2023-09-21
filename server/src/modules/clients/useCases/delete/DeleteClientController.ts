import { Response } from "express";
import { RequestExpress } from "../../../../Types/ExpressTypes";
import { DeleteClientUseCase } from "./DeleteClientUseCase";


class DeleteClientController{

    async handle(request: RequestExpress, response: Response){

        const { clientId } = request.query

        const deleteClientUseCase = new DeleteClientUseCase();

        const client = await deleteClientUseCase.execute(String(clientId))


        return response.status(200).json(client)

    }
}

export { DeleteClientController }