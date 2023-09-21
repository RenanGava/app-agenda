import { Response } from "express";
import { RequestExpress } from "../../../../Types/ExpressTypes";




class GetClientsController {


    async handle(request: RequestExpress, response: Response) {

        const { userId } = request;


        return response.status(200).json({ ok: true })
    }
}

export { GetClientsController }