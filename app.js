const http = require('http');
const server = http.createServer((request,response)=>{
  if(request.method === 'GET'){
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    //response.writeHead(200, {'Content-Type' : 'text/html'});
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
server.listen(3050,err=>{
  if(err){

  }else{
    console.log('port 3050 is listening');
  }
});