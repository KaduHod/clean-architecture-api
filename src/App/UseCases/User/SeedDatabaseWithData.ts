import InMemoryUserRepository from "../../../Infra/Adapters/Database/InMemory/UserRepository";
import { User, UserDTO } from "../../../Domain/Entities/Entities";
import Repository from "../../Repositories/repository";
export default class SeedDatabaseWithUserDataService
{
    constructor(
        private userRepository: Repository<User, UserDTO>,
        private inMemoryRepository: InMemoryUserRepository
    ){
        this.userRepository = userRepository
        this.inMemoryRepository = inMemoryRepository
    }

    public async main(): Promise<any>
    {
        const users = await this.getUsersInMemory()
        const insert = await this.userRepository.saveMany(users)
        console.log(insert)
    }

    private async getUsersInMemory(): Promise<User[]>
    {
        return await this.inMemoryRepository.findAll()
    }
}