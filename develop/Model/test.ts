import { connectToMariaDB, runQuery, runQueries } from "../Controller/mariadb";
import { PoolConnection } from "mariadb";
import createTableQueries from "./createTableQueries";

async function test() : Promise<void>{
    let connection : PoolConnection | undefined;

connection = await connectToMariaDB();
const queries = createTableQueries("admin");

const result = await runQueries(connection, queries);

console.log(result);
}


test();