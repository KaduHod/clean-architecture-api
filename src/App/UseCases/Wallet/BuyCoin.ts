import Repository     from "../../Repositories/repository";
import { Coin, User } from "../../../Domain/Entities/Entities";
import CoinRepository from "../../../Infra/Adapters/Database/InMemory/CoinRepository";
import UserRepository from "../../../Infra/Adapters/Database/InMemory/UserRepository";

export default class BuyCoinService 
{
    constructor(
        private coinRepository: CoinRepository,
        private userRepository: UserRepository
    ){
        this.coinRepository = coinRepository
        this.userRepository = userRepository
    }
}