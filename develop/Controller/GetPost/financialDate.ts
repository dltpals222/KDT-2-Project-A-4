import {Request, Response, Router} from 'express';
import { PoolConnection } from 'mariadb';
import { connectToMariaDB, runQueries } from '../mariadb';

const financialDate = Router();

financialDate.get('/api/chart',async(req:Request, res:Response) => {
  // const companyDate = req.query; //추후 추가
  let connection : PoolConnection | undefined;
  try{
    connection = await connectToMariaDB();
    const query = ['select * from kospi_005930_d order by day desc limit 60'];
    const result = await runQueries(connection,query);
    res.json(result)
  } catch (error){
    console.error('main에서 DB연결에 실패했습니다.', error);
    res.status(500).json({error:"chart 에러 발생"});
  } finally {
    if(connection) {
      connection.end();
    };
  };
});

export default financialDate;