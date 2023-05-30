const app = require('./app');
const mariadb = require('./mariadb');

// DB 연결
mariadb.connect()
  .then(() => {
    // 앱 서버 시작
    app.listen(3000, () => {
      console.log('App server started');
    });
  })
  .catch(err => {
    console.error('Error connecting to MariaDB:', err);
  });

// 앱 서버 종료 시 DB 연결 종료
process.on('SIGINT', async () => {
  try {
    await mariadb.disconnect();
    console.log('MariaDB connection closed');
  } catch (err) {
    console.error('Error closing MariaDB connection:', err);
  } finally {
    process.exit(0); // 앱 서버 종료
  }
});
