const mysql = require("mariadb");
//db 셋팅 개개인이 비밀번호가 달라서 일단 따로 모듈만듬
const db = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "admin123",
  database: "nar",
});

db.connect();
module.exports = db;
