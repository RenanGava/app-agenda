import { Response } from "express";
import { RequestExpress } from "../../../../Types/ExpressTypes";
import { CreateClientUseCase } from "./CreateClientUseCase";



class CreateClientController {


    public async handle(request: RequestExpress, response: Response) {

        const { userId } = request
        const { name, value, service, cellPhone, reservedTime } = request.body

        const createClientUseCase = new CreateClientUseCase();

        const client = await createClientUseCase.execute({ name, userId, value, service, cellPhone, reservedTime })

        return response.json(client)
        
    }
}

export { CreateClientController }