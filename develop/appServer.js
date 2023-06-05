import express from "express";
import path from "path";

//ESM 방식에서 경로 찾기(import.meta.url)
import {fileURLToPath} from 'url';
// 현재 파일의 경로
const __filename = fileURLToPath(import.meta.url);
// 현재 파일의 폴더 경로
const __dirname = path.dirname(__filename);
// root 폴더 경로(현재 파일 폴더 상위에 root가 있기에 아래와 같이 작성.)
const __rootdir = path.resolve(__dirname,"..");
const app = express();

// 경로 제대로 지정되었는지 확인하는 구문.
// console.log(__rootdir); 결과 : #:/~~~/KDT-2-Project-A-4

// appServer 사용 가이드
// 정적 파일 경로 설정하는 구문.
// app.use의 경우 지정된 요청 주소명이 요청으로 들어왔을 때 콜백이 실행된다.
// app.use("요청 주소명", 콜백함수),
// 여기에 정적 파일을 응답할 수 있게 설정 할 수 있다. 방식은 다음과 같다.
// app.use(express.static("경로명"));
// get방식일경우 app.get, post방식일 경우 app,post로 통신할 것.


// dist 폴더내 정적 파일 사용 설정
app.use(express.static(path.join(__rootdir,'develop','dist')))

// 도메인주소(localhost:3000)접속시 SPA 전송
app.get("/", (req, res) => {
    res.sendFile(path.join(__rootdir, 'develop', 'dist', "index.html"));
});
// SPA에 필요한 번들된 스크립트 파일 전송
app.get("/main.js", (req, res) => {
    res.sendFile(path.join(__rootdir, 'develop', "dist", "main.js"));
});

// 서버 구동
app.listen(3000, () => {
    console.log("앱 서버가 http://localhost:3000 에서 실행 중입니다.");
});
