const http = require("http");
const fs = require("fs");
const _  = require("lodash");

const server = http.createServer((req,res)=>{
    console.log("Request Made");

    // just exploring packages
    const num = _.random(0,10);
    console.log(num);

    // setting up header content type
    res.setHeader("content-type", "text/html");
    
    //getting the requested path

    let path = "./before_ejs/"
    switch(req.url){
        case "/":
            path+="index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path+="about.html"  ;
            res.statusCode = 200;
            break;
        //redirecting 
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location","./about");
            res.end();
            break;    
        
        default:
            path+="404.html";
            res.statusCode = 404;
            break;
    }

    //sending a html file as response
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000,"localhost" ,()=>{
    console.log("Listening on port number 3000");
});
