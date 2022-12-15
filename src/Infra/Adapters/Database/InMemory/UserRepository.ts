import Repository, { PK } from "../../../../App/Repositories/repository";
import { User, UserDTO } from "../../../../Domain/Entities/Entities";
import InMemoryDB from "./InMemory";

export default 
    class UserRepository 
    extends InMemoryDB
    implements Repository<User, UserDTO>
{
    constructor()
    {
        super()
    }
    
    public findAll(): Promise<User[]> {
        return this.getUsers()
    }
    public findBy(attrs: UserDTO): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    public findByPK(pk: PK): Promise<User> {
        throw new Error("Method not implemented.");
    }
    public exists(user: UserDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    public saveMany(t: User[]): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    public delete(user: User): Promise<any> {
        throw new Error("Method not implemented.");
    }

}