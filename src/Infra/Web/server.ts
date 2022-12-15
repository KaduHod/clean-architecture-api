import express, { Express, Router }  from "express";

export default class Server 
{
    public app: Express
    public port: number

    constructor({port = 3000})
    {
        this.port = port
        this.app = express()
    }

    useJsonParser(): void
    {
        this.app.use(express.json())
    }

    addRouter(router:Router, route?:string): void
    {
        if(route) this.app.use(route, router)
        else this.app.use(router)
    }

    serve(cb:Function): void
    {
        this.app.listen(this.port, cb())
    }
}