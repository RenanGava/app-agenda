import { Permissions } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs';



class User {
    id?: string;
    name: string;
    email: string;
    password: string
    createdAt?: Date;
    permission: Permissions
    clients: []


    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}


export { User }