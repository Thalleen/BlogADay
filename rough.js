const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});

    res.end();
    
})

server.listen(3000,"localhost",()=>{
    console.log("Listening on port 3000")
})