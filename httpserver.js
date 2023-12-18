
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req,resp)=>{
     resp.statusCode = 200;
     console.log(req);
     resp.setHeader('Content-type','text/html');
     resp.end('<h1>This is the resp from Server</h1>')
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});