let n=6;
for(let i=0;i<=n;i++){
    console.log(i);
}
let arr=process.argv;
for(let i=0;i<arr.length;i++){
    console.log("the process is",arr[i]);
}
let output=require("./math.js"); // importing value from math.js
console.log(output);
console.log(output["add"](2,2));
console.log(output.mul(2,4));
