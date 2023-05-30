const mariadb = require('mariadb');

// DB 연결 설정
const poolSet = {
    // 연결 설정 정보
};

let pool; // DB 풀 객체

async function connect() {
    pool = await mariadb.createPool(poolSet);
    console.log('MariaDB connected');
}

async function disconnect() {
    await pool.end();
    console.log('MariaDB disconnected');
}

module.exports = {
    connect,
    disconnect,
    query: async function (query) {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query(query);
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }
};