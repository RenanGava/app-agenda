import { Request } from "express";

export interface RequestExpress extends Request{
    userId: string
}