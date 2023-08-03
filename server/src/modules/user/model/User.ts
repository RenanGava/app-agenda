import { Permissions } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs';



class User {
    id?: string;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined | null
    createdAt?: Date;
    permission: Permissions | undefined
    clients?: []


    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}


export { User }