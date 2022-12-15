import InMemoryDB from "./InMemory/InMemory"
import MongoDB from "./Mongo/Mongo"
import MysqlDB from "./Mysql/Mysql"

/**
 * Driver de banco de dados
 */
export type Client = MysqlDB | InMemoryDB | MongoDB