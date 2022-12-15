import { Db } from "mongodb";
import Repository, { PK } from "../../../../App/Repositories/repository";
import { Coin, CoinDTO } from "../../../../Domain/Entities/Entities";
import MongoDB from "./Mongo";

export default 
    class CoinRepository
    extends MongoDB
    implements Repository<Coin, CoinDTO>
{
    public schemaName:string

    constructor()
    {
        super()
        this.schemaName = 'Coins'
    }

    public async findAll(): Promise<Coin[]> {
        return this
                .getDb()
                .collection(this.schemaName)
                .find<Coin>({}, { projection: {_id:false} })
                .toArray()
    }

    public async findBy(attrs: CoinDTO): Promise<Coin[]> {
        return this
                .getDb()
                .collection(this.schemaName)
                .find<Coin>({ attrs }, { projection: {_id:false} })
                .toArray()
    }

    public async findByPK(pk: PK): Promise<Coin | null> {
        return this
                .getDb()
                .collection(this.schemaName)
                .findOne<Coin>({ id:pk }, { projection: {_id:false} })
    }

    public async exists(coin: CoinDTO): Promise<boolean> {
        return (await this.findBy(coin)).length > 0
    }

    public async save(coin: Coin): Promise<Coin> {
        await this
                .getDb()
                .collection(this.schemaName)
                .insertOne(coin);
        return coin;
    }

    public async saveMany(coins: Coin[]): Promise<Coin[]> {
        await this
                .getDb()
                .collection(this.schemaName)
                .insertMany(coins);
        return coins;
    }

    public async delete(coin: CoinDTO): Promise<number> {
        const query = await this  
            .getDb()
            .collection(this.schemaName)
            .deleteOne({coin});
        return query.deletedCount
    }
}