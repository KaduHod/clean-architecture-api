import UserRepository, { UserProjection } from "../../../Infra/Adapters/Database/Mongo/UserRepository";
import { UserDTO, User } from "../../../Domain/Entities/Entities";
import { PK } from "../../Repositories/repository";

export type GetUserOptions = {
    wallets?:true
}

export default class CrudUserService
{
    constructor( 
        private userRepository: UserRepository 
    )
    {
        this.userRepository = userRepository
    }

    public async users(
        attrs:UserDTO, 
        fields:GetUserOptions = {}
    ): Promise<User[] | null>
    {
        return await this.userRepository.findBy(attrs, fields)
    }

    public async user(
        pk:PK, 
        fields:GetUserOptions = {}
    ): Promise<User | null>
    {
        return await this.userRepository.findByPK(pk, fields)
    }

    public async usersAndWallets(
        attrs:UserDTO
    ): Promise<User[] | null>
    {
        return await this.userRepository.findBy(attrs, {wallets:true})
    }

    public async userAndWallet(
        pk:PK, 
    ): Promise<User | null>
    {
        return await this.userRepository.findByPK(pk, {wallets:true})
    }
}