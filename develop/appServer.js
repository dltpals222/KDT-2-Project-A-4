"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
// 사용할 정적 파일 폴더 경로 설정. 현재 develop으로 설정되어 있는것으로 보임.
app.use(express_1.default.static(path_1.default.join(__dirname, "./"), {
    // 각 파일 타입별 헤더 설정. js시 헤더 컨텐츠 타입을 JS로.
    setHeaders: function (res, filePath) {
        if (filePath.endsWith(".js")) {
            res.setHeader("Content-Type", "application/javascript");
        }
    },
}));
// 기본 도메인주소 요청 수신시 시작 Html 파일 전송.(HTML안에 번들 파일 연결 예정)
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "./index.html"));
});
// 서버 실행
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
