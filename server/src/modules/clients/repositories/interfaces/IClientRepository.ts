import { Client } from '@prisma/client'


interface IClientDTO{
    name: string;
    userId: string;
    value: string;
    service: string;
    cellPhone: string;
    reservedTime: string;
}


interface IClientRepository{
    create(data: IClientDTO): Promise<Client>;
    getClients(userId: string): Promise<Client[]>
    // delete(clientId: string): Promise<void>;
    // update(clientId: string): Promise<Client>;
}


export { IClientDTO, IClientRepository }