import mysql, {Connection} from 'mysql2'
import knex, {Knex} from 'knex'
export default class MysqlDB
{
    public conn:Knex
    public isConnected:boolean
    
    constructor(){
        this.isConnected = false
        this.conn = this.createConn()
        
    }

    public createConn(): Knex
    {
        this.conn = this.isConnected ? this.conn : knex({
            client: 'mysql2',
            connection:{
                host: 'localhost',
                user: 'root',
                password : 'password',
                port:3306,
                database : 'crypto'
            }
        })
        this.isConnected = true
        return this.conn
    }

    public disconnect(): void
    {
        if(!this.isConnected) return
        this.conn.destroy()
        this.isConnected = false
    }
}