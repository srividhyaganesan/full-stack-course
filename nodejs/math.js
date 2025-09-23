const add=(a=5,b=6)=>a+b;
const mul=(a,b)=>a*b;
const sub=(a,b)=>a-b;
const div=(a,b)=>a/b;

let obj={
    "add":add,
    "mul":mul,
    "sub":sub,
    "div":div
};

module.exports=obj;