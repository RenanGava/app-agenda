import { Client } from '@prisma/client'


interface IClientDTO {
    name: string;
    userId: string;
    value: string;
    service: string;
    cellPhone: string;
    reservedTime: string;
}

interface IUpdateClientDTO{
    clientId: string,
    name?: string;
    value?: string;
    service?: string;
    cellPhone?: string;
    reservedTime?: string;
}

type ListClienst = Omit<Client, "userId">

interface IClientRepository {
    create(data: IClientDTO): Promise<Client>;
    getClients(userId: string): Promise<ListClienst[]>
    delete(clientId: string): Promise<Client>;
    update(data: IUpdateClientDTO): Promise<Client>;
}


export { IClientDTO, IClientRepository, ListClienst, IUpdateClientDTO }