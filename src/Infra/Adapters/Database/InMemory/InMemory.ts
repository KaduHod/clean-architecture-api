import { User, Coin } from "../../../../Domain/Entities/Entities";
import fs from 'fs/promises';

export default class InMemoryDB  
{
    constructor()
    {
        
    }
    public async getUsers(): Promise<User[]>
    {
        return JSON.parse(await fs.readFile('./src/Infra/Adapters/database/inMemory/inMemoryDataBase/data/data.json', 'utf8'))
    }

    public async getCoins(): Promise<Coin[]>
    {
        return JSON.parse(await fs.readFile('./src/Infra/Adapters/database/inMemory/inMemoryDataBase/data/crypto.json', 'utf8'))
    }
}