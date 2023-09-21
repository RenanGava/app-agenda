import { Response } from "express";
import { RequestExpress } from "../../../../Types/ExpressTypes";
import { UpdateClientUseCase } from "./UpdateClientUseCase";


class UpdateClientController {

    async handle(request: RequestExpress, response: Response) {

        const { clientId, name, value, service, cellPhone, reservedTime } = request.body

        const updateClientUseCase = new UpdateClientUseCase()

        const client = await updateClientUseCase.execute({ 
            clientId, 
            name, 
            value,
            service, 
            cellPhone, 
            reservedTime 
        })

        return response.status(200).json(client)
    }
}

export { UpdateClientController }