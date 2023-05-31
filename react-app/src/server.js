import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

const PORT = process.env.PORT || 2080;
app.listen(PORT, () => {
  console.log(`애플리케이션이 http://localhost:${PORT} 에서 실행 중입니다.`);
});
