import Repository, { PK } from "../../../../App/Repositories/repository";
import { User, UserDTO } from "../../../../Domain/Entities/Entities";
import MongoDB from "./Mongo";
import * as mongodb from 'mongodb';

export type UserProjection = {
    _id?:boolean,
    id?:true,
    name?:true,
    birthday?:true
    email?:true
    wallets?:true 
}

export default 
    class UserRepository
    extends MongoDB
    implements Repository<User, UserDTO>
{
    public schemaName:string
    private defaultProjection:UserProjection

    constructor()
    {
        super()
        this.schemaName = 'Users'
        this.defaultProjection = {_id:false, id:true, name:true, birthday:true, email:true}
    }
    public findAll(fields:UserProjection): Promise<User[]> {
        return this
                .getDb()
                .collection(this.schemaName)
                .find<User>({}, { projection: 
                    {...this.defaultProjection, ...fields} 
                })
                .toArray()
    }

    public async findBy(attrs: UserDTO, fields:UserProjection): Promise<User[]> {
        return await this
                        .getDb()
                        .collection(this.schemaName)
                        .find<User>(attrs , { projection: 
                            {...this.defaultProjection, ...fields} 
                        })
                        .toArray()
    }

    public async findByPK(pk: PK, fields:UserProjection): Promise<User | null> {
        return await this
                        .getDb()
                        .collection(this.schemaName)
                        .findOne<User>({ id:pk }, { projection:
                            {...fields, ...this.defaultProjection}
                        })
    }

    public async exists(attrs: UserDTO): Promise<boolean> {
        return (await this.findBy(attrs, {})).length > 0
    }

    public async save(user: User): Promise<User> {
        await this
                .getDb()
                .collection(this.schemaName)
                .insertOne(user);
        return user;
    }

    public async saveMany(user: User[]): Promise<User[]> {
        await this
                .getDb()
                .collection(this.schemaName)
                .insertMany(user);
        return user;
    }

    public async delete(user: UserDTO): Promise<any> {
        const query = await this  
                            .getDb()
                            .collection(this.schemaName)
                            .deleteOne({user});
        return query.deletedCount
    }
        
}