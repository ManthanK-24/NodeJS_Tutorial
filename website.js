
const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;


// Experts say:
// We should create a website using node.js which we will serve using readFile
// and by creating static file server
const server = http.createServer((req,resp)=>{
    
    resp.setHeader('Content-type','text/html');
    //  console.log(req);
    if(req.url== '/'){
    resp.statusCode = 200;
    const data = fs.readFileSync('./index.html');
    resp.end(data.toString());
    }
    else if(req.url== '/about'){
        resp.statusCode = 200;
        resp.end('<h1>This is the resp from About</h1>')
       }
       else if(req.url== '/contact'){
        resp.statusCode = 200;
        resp.end('<h1>This is the resp from Contact</h1>')
       }
       else{
        resp.statusCode = 404;
        resp.end('<h1>Request not found on Server</h1>')
       }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});