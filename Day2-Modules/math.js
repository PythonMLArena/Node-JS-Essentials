function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = { // multiple exports
    add,
    sub,
};
  
// module.exports = add;   // single exports
