import { Client } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";
import { IClientDTO, IClientRepository, IUpdateClientDTO, ListClienst } from "../interfaces/IClientRepository";




class ClientRepository implements IClientRepository {


    private static INSTANCE: ClientRepository

    // métodos estaticos servem para que possamos acessar sem instaciarmos
    // a classe, usando diretamente o metodo.
    public static getInstance(): ClientRepository {

        if (!ClientRepository.INSTANCE) {
            ClientRepository.INSTANCE = new ClientRepository()
        }

        return ClientRepository.INSTANCE
    }


    public async create({ userId, name, reservedTime, cellPhone, service, value }: IClientDTO) {

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

    public async getClients(userId: string): Promise<ListClienst[]> {

        const clients = await prisma.client.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                name: true,
                value: true,
                service: true,
                cellPhone: true,
                createdAt: true,
                reservedTime: true,
                userId: false,
            }
        })

        return clients
    }

    public async delete(clientId: string): Promise<Client> {

        const client = await prisma.client.delete({
            where: {
                id: clientId
            }
        })

        return client
    }

    public async update({ clientId, ...data }: IUpdateClientDTO): Promise<Client> {


        const client = await prisma.client.findFirst({
            where: {
                id: clientId
            }
        })

        const clientUpdate = await prisma.client.update({
            where: {
                id: clientId
            },
            data: {
                cellPhone: !!data.cellPhone ? data.cellPhone : client.cellPhone,
                name: !!data.name ? data.name : client.name,
                service: !!data.service ? data.service : client.service,
                value: !!data.value ? data.value : client.value,
                reservedTime: !!data.reservedTime ? data.reservedTime : client.reservedTime
            }
        })


        return clientUpdate
    }
}





export { ClientRepository }