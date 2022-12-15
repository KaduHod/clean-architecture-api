import CoinRepositoryMysql from "../../../../src/Infra/Adapters/Database/Mysql/CoinRepository";
import CoinRepositoryMongo  from "../../../../src/Infra/Adapters/Database/Mongo/CoinRepository";
import UserRepositoryMongo from "../../../../src/Infra/Adapters/Database/Mongo/UserRepository";
import InMemoryUserRepository from "../../../../src/Infra/Adapters/Database/InMemory/UserRepository";
import SeedDatabaseWithUserDataService from "../../../../src/App/UseCases/User/SeedDatabaseWithData";
import CrudUserService from "../../../../src/App/UseCases/User/CrudUserService";

const testeRepositorys = async () => {
    const coinRepoMysql = new CoinRepositoryMysql();
    const mysqlCoins = await coinRepoMysql.findAll();
    const coinRepoMongoDb = new CoinRepositoryMongo();
    let coins = await coinRepoMongoDb.findAll() 
        
    const insert = await coinRepoMongoDb.saveMany(mysqlCoins)
    const coinsMongo = await coinRepoMongoDb.findAll()
    
    console.log({coinsMongo, insert})
    process.exit()
}

const testeSeedDatabaseWithUserDataService = async () => {
    const userRepo = new UserRepositoryMongo()
    const inMemoryRepository = new InMemoryUserRepository()
    const useCase = new SeedDatabaseWithUserDataService(userRepo, inMemoryRepository)
    // await useCase.main()
}

const testCrudUserService = () => {
    const userRepo = new UserRepositoryMongo()
    const crudService = new CrudUserService(userRepo)

    const testGetUsers = async () => {
        console.log('\t\t Get all users')
        const users = await crudService.users({})
        console.log(users)
    }

    const testGetUsersWallet = async () => {
        console.log('\t\t Get all users and wallets')
        const users = await crudService.usersAndWallets({})
        users?.forEach(users => console.log(users)) 
    }

    const testGetOneUser = async () => {
        console.log('\t\t Get one user')
        const user = await crudService.user("4ff297ca-1d86-4ede-a713-34ac0c47107a")
        console.log(user)
    }

    const testGetOneUserWithWallet = async () => {
        console.log('\t\t Get one user and his wallets')
        const user = await crudService.userAndWallet("4ff297ca-1d86-4ede-a713-34ac0c47107a")
        console.log(user)
    }

    return {
        testGetUsers,
        testGetUsersWallet,
        crudService,
        testGetOneUser,
        testGetOneUserWithWallet
    }
}

(async() => {
    const crudUser = testCrudUserService()
    await crudUser.testGetUsers()
    await crudUser.testGetUsersWallet()
    await crudUser.testGetOneUser()
    await crudUser.testGetOneUserWithWallet()

    process.exit()
})()