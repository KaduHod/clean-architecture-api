export type User = {
    id?:string, name:string, birthday:Date, email:string, wallets?:Wallet[]
}

export type Coin = {
    id?:string, name:string, symbol:string, price:string
}

export type Wallet = {
    id?:string, address:string, user:User, coins?:Amount[]
}

export type Amount = {
    coin:Coin, amount:number, wallet:Wallet, 
}

export type CoinDTO = Partial <Coin> 

export type UserDTO = Partial <Omit <User, "wallets"> > 

export type WalletDTO = Partial <Omite <Wallet, "coins"> >

export type AmountDTO = Partial <Omite <Amount, "wallet"> >

