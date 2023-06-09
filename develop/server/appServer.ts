import express, { Request, Response } from "express";
import path from "path";
import { getUserInfo, setUserInfo } from "./loginInfo";
import { connectToMariaDB, runQuery } from "../db/mariadb";
import { PoolConnection } from "mariadb";

// 익스프레스 앱서버 시작.
const app = express();

// 사용할 정적 파일 폴더 경로 설정. 현재 develop으로 설정되어 있는것으로 보임.
app.use(
  express.static(path.join(__dirname, "..", "..", "dist"), {
    // 각 파일 타입별 헤더 설정. js시 헤더 컨텐츠 타입을 JS로.
    setHeaders(res: Response, filePath: string) {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);
// JSON 파일 사용 설정
app.use(express.json());

// 기본 도메인주소 요청 수신시 시작 Html 파일 전송.(HTML안에 번들 파일 연결 예정)
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

app.post("/signup", async (req: Request, res: Response) => {
  const data = req.body;
  let connection : PoolConnection | undefined;
  try {
    connection = await connectToMariaDB();
    const query = `SELECT * FROM userinfo WHERE userid = '${data.id}'`;
    const result = await runQuery(connection, query);

    if (result.length > 0) {
      console.log("회원가입 실패! 일치하는 아이디 있음.");
      res.json({ success: false, reason: "등록된 회원이 있습니다." });
    } else {
      console.log("회원가입 성공!");
      const insertQuery = `INSERT INTO userinfo (userid, userpwd) VALUES ('${data.id}', '${data.pwd}')`;
      await runQuery(connection, insertQuery);
      res.json({ success: true, userId: data.id });
    }
  } catch (error) {
    console.error("오류:", error);
    res.status(500).json({ success: false, reason: "서버 오류" });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.post("/login", (req: Request, res: Response) => {
  const data = req.body;

  const userInfo = getUserInfo();
  const user = userInfo.find((u) => u.userid === data.id);
  if (user === undefined) {
    console.log("로그인 실패! 일치하는 아이디 없음.");
    res.json({ success: false, reason: "일치하는 아이디가 없습니다." });
  } else if (user && user.userpwd === data.pwd) {
    console.log("로그인 성공!");
    res.json({ success: true, userId: data.id });
  } else {
    console.log("로그인 실패!");
    res.json({ success: false, reason: "암호가 일치하지 않습니다." });
  }
});
// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
