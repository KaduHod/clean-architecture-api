import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://Carlos:se2bnzS9kdLwDHZu@cluster0.wvyqoca.mongodb.net/?retryWrites=true&w=majority";

export default class MongoDB
{
    public client:MongoClient
    public isConnected: boolean
    public databaseName:string

    constructor(){
        this.isConnected = false
        this.databaseName = 'crypto'
        this.client = new MongoClient(uri)
    }

    public async connect(): Promise<void>
    {
        await this.client.connect()
    }

    public getDb()
    {
        return this.client.db(this.databaseName)
    }

    public init(): void
    {
        const db = this.client.db('crypto')
        db.createCollection('Coins', { autoIndexId: false })
        db.createCollection('Users', { autoIndexId: false })
        process.exit()
    }
}