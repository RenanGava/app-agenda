import { Client } from "@prisma/client";
import { ClientRepository } from "../../repositories/implementation/ClientRepository";
import { IUpdateClientDTO } from "../../repositories/interfaces/IClientRepository";


class UpdateClientUseCase{

    async execute(data: IUpdateClientDTO): Promise<Client>{

        const clientRepository = new ClientRepository()

        const client = await clientRepository.update(data)

        return client
    }

}

export { UpdateClientUseCase }