const fs = require("fs");// fs is built in  

// sync call  - Blocking request
fs.writeFileSync("./test.txt","Hello world!");


// Async call return nothing it expect callback function ( Non Blocking Request)
fs.writeFile("./test1.txt","Hello world! Async!",(err) => {});


// Read file Sync Storing result in variables
const result1 = fs.readFileSync("./test1.txt","utf-8");

console.log("Sync Output",result1);


fs.readFile("./test1.txt","utf-8",(err,result) => {
    if (err){
        console.log("Error",err);
    } else {
        console.log("Aync Output",result);
    }
});

fs.appendFileSync("./test1.txt","Hey There\n");

const result12 = fs.readFileSync("./test1.txt","utf-8");

console.log("Sync Output",result12);

// fs.readFile("./test1.txt","utf-8",(err,result) => {
//     if (err){
//         console.log("Error",err);
//     } else {
//         console.log("Aync Output",result);
//     }
// });
