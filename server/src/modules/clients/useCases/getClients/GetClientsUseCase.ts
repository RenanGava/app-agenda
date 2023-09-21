import { Client } from "@prisma/client";
import { ClientRepository } from "../../repositories/implementation/ClientRepository";
import { ListClienst } from "../../repositories/interfaces/IClientRepository";



class GetClientsUseCase {

    constructor(){}

    async execute(userId: string): Promise<ListClienst[]>{
        const clientRepository = ClientRepository.getInstance();
        const clients = await clientRepository.getClients(userId);
        return clients
    }
}

export { GetClientsUseCase }