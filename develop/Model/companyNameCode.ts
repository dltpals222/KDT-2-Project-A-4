import { PoolConnection } from 'mariadb'
import {connectToMariaDB,runQuery} from '../Controller/mariadb'
import { ReactNode } from 'react';

let connection : PoolConnection | undefined;

async function companyNameCode(searchCategory : string, searchTerm : string | number):Promise<ReactNode> {
  try {
    connection = await connectToMariaDB();
    let query : string ;
    if(searchCategory === 'name'){
      query = `select no, code, name from companylist where name like '%${searchTerm}%'`
    } else {
      query = `select no, code, name from companylist where code like '%${searchTerm}%'`
    }
    const result : Promise<ReactNode>= await runQuery(connection, query);
    const resultPromise : ReactNode = await result
    console.log("쿼리문 실행 결과",result); // 쿼리 실행 결과를 출력하거나 필요한 작업을 수행합니다.
    return resultPromise
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