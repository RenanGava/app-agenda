import { Permissions } from '@prisma/client';



class User {
    id?: string;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined | null
    createdAt?: Date;
    permission: Permissions | undefined
    clients?: []
}


export { User }