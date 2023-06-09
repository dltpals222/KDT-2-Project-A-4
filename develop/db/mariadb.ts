import mariadb from 'mariadb';

// MariaDB 연결 설정
const connectionConfig : mariadb.PoolConfig = {
  host: 'localhost', // MariaDB 호스트
  port: 3306, // MariaDB 포트
  user: 'root', // MariaDB 사용자 이름
  password: 'qwe123', // MariaDB 비밀번호
  database: "aitrading_db",// 사용할 데이터베이스 이름
  connectionLimit: 5
};

// MariaDB 연결 풀 생성
const pool = mariadb.createPool(connectionConfig);

// MariaDB 연결 함수
async function connectToMariaDB(): Promise<mariadb.PoolConnection> {
  try {
    const connection = await pool.getConnection();
    console.log('MariaDB에 성공적으로 연결되었습니다.');
    return connection;
  } catch (error) {
    console.error('MariaDB 연결 오류:', error);
    throw error;
  }
}

// 쿼리 실행 함수
async function runQuery(connection: mariadb.PoolConnection, query: string): Promise<any> {
  try {
    const result = await connection.query(query);
    return result;
  } catch (error) {
    console.error('쿼리 실행 오류:', error);
    throw error;
  } finally {
    connection.release(); // 연결 반환
  }
}

export default {connectToMariaDB, runQuery};