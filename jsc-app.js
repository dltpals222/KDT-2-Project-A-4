import express from "express";
import cors from "cors";
import mariadb from "mariadb";

const app = express();

app.use(cors());

// 미들웨어 설정
app.use(express.json());

//maria db 연결
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "finance_userinfo",
  // connectionLimit : 5 //원하는  연결수 설정하기
});
// 로그인 API 엔드포인트 정의
app.post("/api/login", async (req, res) => {
  const { userid, password } = req.body;

  let connect;
  try {
    //마리아db 연결하는 부분
    connect = await pool.getConnection();
    const result = await connect.query(
      "select * from userinfo where userid = ? and password = ? , [userid,password]"
    );

    if (result.length > 0) {
      //로그인 성공
      res.json({ token: "sample-token" });
    } else {
      //로그인 실패시
      res.status(401).json({ error: "로그인실패" });
    }
  } catch (error) {
    console.error("DB 에러:", error);
    res.status(500).json({ error: "데이터 베이스 에러" });
  } finally {
    if (connect) {
      connect.release();
    }
  }
});

// 서버 실행
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
