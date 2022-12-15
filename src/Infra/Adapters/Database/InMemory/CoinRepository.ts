import Repository, { PK } from "../../../../App/Repositories/repository";
import { Coin, CoinDTO } from "../../../../Domain/Entities/Entities";
import InMemoryDB from "./InMemory";
import { isEqual } from "../../../../Helpers/object";


export default 
    class CoinRepository 
    extends InMemoryDB 
    implements Repository<Coin, CoinDTO>
{
    constructor()
    {
        super()
    }
    public async findAll(): Promise<Coin[]> {
        return this.getCoins()
    }
    public async findBy(attrs: Coin): Promise<Coin[]> {
        return (await this.getCoins())
                    .filter( coin => isEqual.objectToObject(attrs, coin))
    }
    public async findByPK(pk: PK): Promise<Coin> {
        throw new Error("Method not implemented.");
    }
    public async exists(coin: Coin): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async save(coin: Coin): Promise<Coin> {
        throw new Error("Method not implemented.");
    }
    public async saveMany(coin: Coin[]): Promise<Coin[]> {
        throw new Error("Method not implemented.");
    }
    public async delete(coin: Coin): Promise<any> {
        throw new Error("Method not implemented.");
    }
}