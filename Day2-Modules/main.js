const math = require('./math.js');
const math2 = require('./new.js');
console.log(math,math2)
const buffer = require('buffer');

const webserver = require('http');
console.log(webserver,buffer);

console.log(math.add(2,5));
console.log(math.sub(2,5));
console.log(math2.multiply(2,5));