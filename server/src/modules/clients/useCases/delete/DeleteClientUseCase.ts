import { ClientRepository } from "../../repositories/implementation/ClientRepository"



class DeleteClientUseCase{


    async execute(clientId: string){
        const clientRepository = ClientRepository.getInstance()

        const client = await clientRepository.delete(clientId)

        return client
    }
}

export { DeleteClientUseCase }