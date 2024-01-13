const fs = require("fs");// fs is built in  

// sync call  - Blocking request
fs.writeFileSync("./test.txt","Hello world!");


// Async call return nothing it expect callback function ( Non Blocking Request)
// fs.writeFile("./test1.txt","Hello world! Async!",(err) => {});


// Read file Sync Storing result in variables
const result1 = fs.readFileSync("./test.txt","utf-8");

console.log("Sync Output",result1);


// fs.readFile("./test1.txt","utf-8",(err,result) => {
//     if (err){
//         console.log("Error",err);
//     } else {
//         console.log("Aync Output",result);
//     }
// });

fs.appendFileSync("./test.txt","Hey There\n");
fs.appendFileSync("./test.txt","Hey There Todays Date is  "+ Date.now());

const result12 = fs.readFileSync("./test.txt","utf-8");

console.log("Sync Output",result12);

// fs.readFile("./test1.txt","utf-8",(err,result) => {
//     if (err){
//         console.log("Error",err);
//     } else {
//         console.log("Aync Output",result);
//     }
// });

fs.copyFileSync("./test.txt","./test1.txt"); // copy from test to test 1

fs.unlinkSync("./test1.txt"); // delete  test1

fs.mkdirSync("folder1"); // create folder

fs.mkdirSync("folder2/a/b",{recursive:true}); // create folder inside folder 