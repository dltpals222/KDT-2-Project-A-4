import { connectToMariaDB, runQuery, runQueries } from "../Controller/mariadb";
import { PoolConnection } from "mariadb";
import createTableQueries from "./createTableQueries";

async function test(userid:string) : Promise<void>{
    let connection : PoolConnection | undefined;

connection = await connectToMariaDB();
const queries = createTableQueries(userid);

const result = await runQueries(connection, queries);

console.log(result);
}


test("admin");
test("dgchoi3904");
test("test01");
test("qwe123");
