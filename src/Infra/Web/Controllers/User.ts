import { Request, Response } from "express";

export default class UserController
{
    public static async user(req:Request, res:Response): Promise<void> 
    {
        const {id} = req.params
        console.log(id)
    }
}
