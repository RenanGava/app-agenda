import { prisma } from "../../../../prisma/prisma";
import { UserRepository } from "../../../user/repositories/implementation/UserRepository";
import { IClientDTO, IClientRepository } from "../interfaces/IClientRepository";


class ClientRepository implements IClientRepository {


    private static INSTANCE: ClientRepository

    public static getInstance(): ClientRepository {
        
        if(!ClientRepository.INSTANCE){
            ClientRepository.INSTANCE = new ClientRepository()
        }
        

        return ClientRepository.INSTANCE
    }


    async create({ userId, name, reservedTime, cellPhone, service, value }: IClientDTO) {

        const clientAlreadyExist = await prisma.client.findFirst({
            where: {
                AND: [
                    { userId: userId },
                    { name: name }
                ]
            }
        })


        if (clientAlreadyExist) {
            throw new Error("Client already Exists")
        }

        const client = await prisma.client.create({
            data: {
                name: name,
                value: value,
                userId: userId,
                service: service,
                cellPhone: cellPhone,
                reservedTime: reservedTime,
            }
        })


        return client
    }
}





export { ClientRepository }