import express from "express";
import path from "path";

//ESM 방식에서 경로 찾기(import.meta.url)
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __rootdir = path.resolve(__dirname,"..");
const app = express();

console.log(__rootdir);
// appServer 사용 가이드
// 정적 파일 경로 설정하는 구문.
// app.use의 경우 지정된 요청 주소명이 요청으로 들어왔을 때 콜백이 실행된다.
// app.use("요청 주소명", 콜백함수),
// 여기에 정적 파일을 응답할 수 있게 설정가능한데 방식은 다음과 같다.
// app.use(express.static("경로명"));
// dist 폴더내 정적 파일 사용 설정
// app.use(express.static(path.join(__rootdir,'develop','dist')))
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__rootdir, 'develop', 'dist', "index.html"));
// });

// app.get("/main.js", (req, res) => {
//     res.sendFile(path.join(__rootdir, 'develop', "dist", "main.js"));
// });

// app.listen(3000, () => {
//     console.log("앱 서버가 http://localhost:3000 에서 실행 중입니다.");
// });
