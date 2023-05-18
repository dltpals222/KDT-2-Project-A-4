//require를 통해 http를 가져오기 
const http = require('http');
//createServer를 이용하여 서버를 생성
const server = http.createServer((request,response)=>{
  //매개변수 request의 요청방식을 GET으로 요청
  if(request.method === 'GET'){
    //헤더정보를 내보내기
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    /*헤더정보를 text타입을 html로 했을 경우*/
    /*굳이 볼 필요X */
    //response.writeHead(200, {'Content-Type' : 'text/html'});
    /*컨텐츠 출력완료 
    * 컨텐츠 출력방식을 보통과 html백틱방식 두가지로 만듬./
    response.end('This is Team NAR');
    /*response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Example Page</title>
    </head>
    <body>
      <div id="root"></div>
      <script>
        const body = document.querySelector('body');
        const root = document.getElementById('root');
        root.style.textAlign = 'center';
        root.style.display = 'flex';
        root.style.flexDirection = 'column';
        root.style.justifyContent = 'center';
        root.style.alignItems = 'center';
        root.style.backgroundColor = 'skyblue';
        root.style.width = '200px';
        root.style.height = '120px';
        root.textContent = 'This is Team NAR';
      </script>
    </body>
    </html>`);*/
  }
});
//서버 포트 대기 요청
server.listen(3050,err=>{
  if(err){

  }else{
    //포트가 연결되었을시, 콘솔로 띄우기
    console.log('port 3050 is listening');
  }
});