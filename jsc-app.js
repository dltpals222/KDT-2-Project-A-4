const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const method = req.method;
  const pathName = parseUrl.pathname;

  if (method === "GET" && pathName === "/") {
    fs.readFile("./test.html", () => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            #root {
              width : 100vw;
              height : 100vh;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
          </style>
        </head>
        <body>
          <div id="root">NAR</div>
          <script></script>
        </body>
      </html>`);
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
