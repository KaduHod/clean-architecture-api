export type PK = string | number;

export default interface Repository<T, TDTO>
{
    public async findAll(fields?): Promise<T[]>
    public async findBy(attrs:TDTO, fields?): Promise<T[]>
    public async findByPK(pk:PK, fields?): Promise<T | null>
    public async exists(t:TDTO): Promise<boolean>
    public async save(t:T): Promise<T>
    public async saveMany(t:T[]): Promise<T[]>
    public async delete(t:TDTO): Promise<any>
}