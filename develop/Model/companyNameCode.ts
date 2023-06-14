import { PoolConnection } from 'mariadb'
import {connectToMariaDB,runQuery} from '../Controller/mariadb'

let connection : PoolConnection | undefined;

async function companyNameCode(searchCategory : string, searchTerm : string | number) {
  try {
    connection = await connectToMariaDB();
    let query : string ;
    if(searchCategory === 'name'){
      query = `select no, code, name from companylist where name like '%${searchTerm}%'`
    } else {
      query = `select no, code, name from companylist where code like '%${searchTerm}%'`
    }
    const result = await runQuery(connection, query);
    console.log("쿼리문 실행 결과",result);
    return result;
  } catch (error) {
    console.error('오류:', error);
  } finally {
    if(connection){
      connection.release();
    }
  }
}

let connection : PoolConnection | undefined;

async function companyNameCode(searchCategory : string, searchTerm : string | number) {
  try {
    connection = await connectToMariaDB();
    let query : string ;
    if(searchCategory === 'name'){
      query = `select no, code, name from companylist where name like '%${searchTerm}%'`
    } else {
      query = `select no, code, name from companylist where code like '%${searchTerm}%'`
    }
    const result = await runQuery(connection, query);
    console.log("쿼리문 실행 결과",result);
    return result;
  } catch (error) {
    console.error('오류:', error);
  } finally {
    if(connection){
      connection.release();
    }
  }
}

export default companyNameCode;