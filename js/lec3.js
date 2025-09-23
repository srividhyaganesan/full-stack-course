/*
function rolldice(){
    console.log(Math.ceil(Math.random()*6));
}

function calcsum(a,b){
    return a+b;
}
// function exp - storing in one variable and just calling function without any name
let sum=function(a,b){
    return a+b;
}

function concat(a){
    let str="";
    for(let i=0;i<a.length;i++){
        str+=a[i];
    }
    return str;
}

// higher order func
function multiplegreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet=function(){
    console.log("hello!");
}

// methods - actions to be performed inside func (calling function as a form of object)
const calculator={
    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }

}

// this keyword in js
const student={
    phy:95,
    che:95,
    mat:95,
    sci:95,
    getavg(){
        let avg=(this.phy+this.che+this.mat)/3;
        console.log(avg);
    }
}

// try catch block

try{
    console.log(a);
}
catch(e){
    console.log(e);
}

// arrow function
const info=(name,rollno,cgpa)=>{
    console.log(`${name} roll number is ${rollno}. Cgpa is ${cgpa}`);
}

// implicit return

const cube=n=>(n*n*n);

// set Timeout function
setTimeout( func=()=>{
    console.log("Trying settimeout function")
},400);

function greeting(name){
    console.log("Hello "+name+"! Dont care abt anything");
}

// set timeout with args
console.log(setTimeout(greeting,4000,"Srividhya")); // calling the function calcsum with timeout of 4000 , args are 5,9

// set and clear interval

let id=setInterval(()=>{console.log("Hi Sri!")},3000); // prints for every 3sec
clearInterval(id);

// program to print "hello world 5 times at interval of 2s"

let id1=setInterval(()=>{console.log("Hello world!")},2000);

setTimeout(()=>{clearInterval(id1)},10000); // 2*5


rolldice();
console.log(calcsum(7,8));
console.log(concat(["Sri","vidhya"," ","Ganesan"]));
console.log(sum(3,4));
multiplegreet(greet,5);
console.log(calculator.mul(10,50));
student.getavg();
info("Srividhya",2020504589,9.5);
console.log("The cube of 3 is "+cube(3));
*/

// array method
// for each

let arr=[1,2,3,4,5];

function print(ele){
    console.log(`The element is ${ele}`);
}

arr.forEach(print);


const classinfo=[
   {
        name:"Srividhya",
        age:22,
        grade:"O",
        Phoneno: 9025956857
    },
    {
        name:"Gayatri",
         age:46,
        grade:"A+",
        Phoneno: 9791833883
    },
    {
        name:"Ganesan",
         age:54,
        grade:"A",
        Phoneno: 9944825954
    }

]

function printmark(ele){
    console.log(ele.grade);
}

classinfo.forEach(printmark);
// default params
function def(a,b=3){
    console.log(a+b);
}
def(2);

// spread
let arr1=[1,2,3,4,5,6,7,8,9];
console.log(Math.min(...arr1)); // spreads the arr value to ind numbers
console.log(...arr1);
let arr2=[...arr1];
arr2.push(6);
arr2.push(7);
arr2.push(10);
console.log(arr2);
let chars=[..."srividhya"];
console.log(chars);
let arr3=[...arr1,...arr2]; // first arr1 and then arr2
console.log(arr3);


const obj={
    username:"srividhya",
    password:"Srivid@24"
}

const obj2={...obj,DOB:"24/11/2002",
    city:"Chennai"
}
console.log(obj2);

const obj3={...arr2,...chars}; // since there is overlap of idx in chars and arr, it wont take first 8 indices (length 9) in arr2 and after that it starts printing
console.log(obj3);

// rest - opposite of spread
function arrsum(...args){ // args is acting as array (so it rest)
    let arrsum=args.reduce((acc,ele)=>acc+ele);
    console.log(arrsum);
}

arrsum(...arr2); // pass individual values via spread


// destructuring - converts into mult values
let strarr=["apple","mango","banana","orange"];
let[fruit1,fruit2]=strarr;
console.log(`The fruits are ${fruit1} and ${fruit2}`);
let [fruit4,fruit5,...fruit3]=strarr;
console.log(`Remaining fruits are ${fruit3}`); // destructure+rest
// destructruing with objects
let {username,password}=obj; // it searches for username key in the obj
console.log(username);
// repharse
let{DOB:loginid,city:code}=obj2;
try{
    console.log(DOB); // undefined
}
catch (e){
    console.log("dob is not defined : " + (e));
}
console.log(loginid); // searches for the ket DOB in obj2 and stores them in loginid so o/p is 24/11/2002


