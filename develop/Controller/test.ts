import { connectToMariaDB, runQueries } from "./mariadb";
import { PoolConnection } from "mariadb";

async function test() : Promise<void>{
    let connection : PoolConnection | undefined;

connection = await connectToMariaDB();
const queries = [`SHOW PROCESSLIST`,`SHOW DATABASES`]

const result = await runQueries(connection, queries);

console.log(result);
}

test();