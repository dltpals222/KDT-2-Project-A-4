import express, { Request, Response } from "express";
import path from "path";
import { connectToMariaDB, runQuery } from "./mariadb";
import { PoolConnection } from "mariadb";
import { v4 as uuidv4 } from 'uuid';

// 익스프레스 앱서버 시작.
const app = express();

// 세션 값 저장용 객체.(함수안에 키 : 값 형태로 추가될 예정.)
interface Sessions {
  [sessionId: string] : any
}
const sessions : Sessions = {};

// 사용할 정적 파일 폴더 경로 설정. 현재 develop으로 설정되어 있는것으로 보임.
app.use(
  express.static(path.join(__dirname, "dist"), {
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
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/api/main/search", async (req:Request, res:Response) => {
  const companyDate = req.body;
  let connection : PoolConnection | undefined;
  console.log(companyDate)
  try{
    connection = await connectToMariaDB();
    const query = `select no, code, name from companylist where ${companyDate.searchCategory} like '%${companyDate.searchTerm}%'`
    
  } catch(error) {
    console.error("검색에러" , error)
  } finally {
    if(connection) {
      connection.end();
    }
  }
})

app.post("/signup", async (req: Request, res: Response) => {
  const signUpData = req.body;
  let connection : PoolConnection | undefined;
  try {
    connection = await connectToMariaDB();
    const query = `SELECT * FROM userinfo WHERE userid = '${signUpData.id}'`;
    const result = await runQuery(connection, query);

    if (result.length > 0) {
      console.log("회원가입 실패! 일치하는 아이디 있음.");
      res.json({ success: false, reason: "등록된 회원이 있습니다." });
    } else {
      console.log("회원가입 성공!");
      const insertQuery = `INSERT INTO userinfo (userid, userpwd) VALUES ('${signUpData.id}', '${signUpData.pwd}')`;
      await runQuery(connection, insertQuery);
      res.json({ success: true });
    }
  } catch (error) {
    console.error("오류:", error);
    res.status(500).json({ success: false, reason: "서버 오류" });
  } finally {
    if (connection) {
      connection.end();
    }
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const loginData = req.body;

  let connection : PoolConnection | undefined;
  
  try{
    connection = await connectToMariaDB();
    const query = `SELECT * FROM userinfo WHERE userid = '${loginData.id}'`;
    const result = await runQuery(connection, query);

    if (result.length === 0) {
      console.log("로그인 실패! 일치하는 아이디 없음.");
      res.json({ success: false, reason: "일치하는 아이디가 없습니다." });
    } else if (result[0].userid = loginData.id && result[0].userpwd === loginData.pwd) {
      console.log("로그인 성공!");
      // 세션 키 생성
      let sessionId: string = uuidv4();
      // 서버 세션에 id포함 저장.
      sessions[sessionId] = { userid: loginData.id }
      // 세션 쿠키 전송.
      res.cookie("sessionId", sessionId);
      // json으로 세션 아이디 전송
      res.json({ success: true , sessionId : sessionId });
    } else {
      console.log("로그인 실패!");
      res.json({ success: false, reason: "암호가 일치하지 않습니다." });
    }

  } catch(error) {
    console.error(error);
  } finally {
    if(connection){
      connection.end();
    }
  }
});
// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
