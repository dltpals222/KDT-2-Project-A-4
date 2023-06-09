import mariadb from 'mariadb';

// MariaDB 연결 설정
const connectionConfig : mariadb.PoolConfig = {
  host: '192.168.100.137', // MariaDB 호스트
  port: 3306, // MariaDB 포트
  user: 'root', // MariaDB 사용자 이름
  password: 'qwe123', // MariaDB 비밀번호
  database: "aitrading_db",// 사용할 데이터베이스 이름
  connectionLimit: 5
};

// MariaDB 연결 풀 생성
const pool = mariadb.createPool(connectionConfig);

// MariaDB 연결 함수
/**
 * mariadb내 설정된 ConnectionConfig을 토대로 해당 host에 있는 mariadb 서버에 연결을 시도하는 함수. const pool 등에 할당하여 사용해야한다. 
 * async (req, res) => {
 * 
 * let connection: PoolConnection | undefined; `conncetion을 선언할 것.`
 * 
 * try {
 * 
 * connection = await connectToMariaDB();
 * 
 * const query = '작성할 쿼리문';
 * 
 * const result = await runQuery(connection, query);
 * 
 * `<이곳에 자신이 작성할 구문 작성할 것.>`
 * 
 * } catch (error) {
 * 
 * console.error("오류:", error);
 * 
 * `<에러 핸들링을 여기서 할 것.>`
 * 
 * } finally {
 * 
 * if (connection) {
 * 
 * connection.release();
 * 
 * }}});
 * 
 * @returns {Promise<mariadb.PoolConnection>}
 */
export async function connectToMariaDB(): Promise<mariadb.PoolConnection> {
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
/**
 * 
 * 연결이 된 라인을 통해 쿼리문을 보내고 릴리즈한다.
 * 
 * 사용방법 :
 * 
 * const `변수명` = runQuery(`연결성공한 커넥션`,`보낼 쿼리문`);
 * 
 * @param connection  실행된 커낵션 풀. connectToMariaDB가 할당된 connection을 여기에 넣는다.
 * @param query `String`타입 보낼 쿼리문.
 * @returns 
 */
export async function runQuery(connection: mariadb.PoolConnection, query: string): Promise<any> {
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