import Repository, { PK } from '../../../../App/Repositories/repository';
import { Coin, CoinDTO } from '../../../../Domain/Entities/Entities';
import MysqlDB from './Mysql'

export default 
    class CoinRepository 
    extends MysqlDB 
    implements Repository<Coin, CoinDTO>
{
    constructor()
    {
        super()
    }
    public async findAll(): Promise<Coin[]> {
        return await this.conn<Coin>('Coins');
    }
    public async findBy(attrs: CoinDTO): Promise<Coin[]> {
        return await this.conn<Coin>('Coins').where(attrs)
    }
    public async findByPK(pk: PK): Promise<Coin> {
        return (await this.conn<Coin>('Coins').where('id', pk))[0]
    }
    public async exists(coin: CoinDTO): Promise<boolean> {
        return !!(await this.conn<Coin>('Coins').where(coin))[0]
    }
    public async save(coin: Coin): Promise<Coin> {
        const query = await this.conn<Coin>('Coins').insert(coin)
        return coin
    }
    public async saveMany(coins: Coin[]): Promise<Coin[]> {
        const query = await this.conn<Coin>('Coins').insert(coins)
        return coins
    }
    public async delete(coin: CoinDTO): Promise<any> {
        const query = await this.conn<Coin>('Coins').where(coin).del()
    }

}