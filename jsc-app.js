import url from "url";
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const method = req.method;
  const pathName = parseUrl.pathname;

  if (method === "GET" && pathName === "/") {
    fs.readFile("./test.html", () => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end();
    });
  }
});
server.listen(3050, (err) => {
  if (err) {
    console.error("err");
  } else {
    console.log("돌아감");
  }
});
