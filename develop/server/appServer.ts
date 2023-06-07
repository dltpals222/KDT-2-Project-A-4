import express, { Request, Response } from "express";
import path from "path";
const app = express();

// 사용할 정적 파일 폴더 경로 설정. 현재 develop으로 설정되어 있는것으로 보임.
app.use(
  express.static(path.join(__dirname,".." , "dist"), {
    // 각 파일 타입별 헤더 설정. js시 헤더 컨텐츠 타입을 JS로.
    setHeaders(res: Response, filePath: string) {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);
// 기본 도메인주소 요청 수신시 시작 Html 파일 전송.(HTML안에 번들 파일 연결 예정)
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});


// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
