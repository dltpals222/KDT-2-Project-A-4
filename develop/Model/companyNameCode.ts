import mariadb, { PoolConnection } from 'mariadb'
import {connectToMariaDB,runQuery} from '../Controller/mariadb'

const connect = connectToMariaDB()
const query : string = 'select no, code, name from companylist;'
const result = runQuery(connect as Promise<PoolConnection>, query)