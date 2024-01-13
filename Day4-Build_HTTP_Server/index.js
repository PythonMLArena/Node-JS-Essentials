console.log("HTTP Server")

const Server = require("http");
const fsservice = require("fs");
// Arrow Function is request handler which have access of two parameters request and response
const prathameshserver1 = Server.createServer((req,res) => {
    console.log("New Request Received");
    const Data = `${Date.now()} : ${req.url} New Request Received\n`; 
    //console.log(req.headers);
    fsservice.appendFile("log.txt", Data , (err,Data) => {
        switch (req.url) {
            case "/":
                res.end("HOMEPAGE");
                break;
            case "/about":
                res.end("About Page is under construction");
                break;
            case "/contactus":
                res.end("About contactus is under construction");
                break;
            default:
                res.end("HOMEPAGE");

    }
    });
    //console.log(res);
    
    }); 

prathameshserver1.listen(3501,() => console.log("Server Started!"));