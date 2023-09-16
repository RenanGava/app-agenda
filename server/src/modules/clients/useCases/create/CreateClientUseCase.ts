import { ClientRepository } from "../../repositories/implementation/ClientRepository";
import { IClientDTO } from "../../repositories/interfaces/IClientRepository";



class CreateClientUseCase {

    async execute(clientData: IClientDTO) {

        const clientRepository = ClientRepository.getInstance()

        const client = await clientRepository.create(clientData)


        return client
    }
}


export { CreateClientUseCase }