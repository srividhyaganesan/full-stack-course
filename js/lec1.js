
/*console.log("hello world!Welcome to JS")
let a=10;
let b=5;
const c=15;
console.log("the sum is :", a+b+c);

let topprice=751;
let pantprice=350;
let total="The total price is " + (topprice+pantprice) + " ruppees .";
console.log(`The sum is ${topprice+pantprice} ruppees.`)
console.log(`The diff is ${topprice-pantprice} ruppees.`)
console.log(`The mult is ${topprice*pantprice} ruppees.`)
console.log(`The division is ${parseInt(topprice/pantprice)} ruppees.`)
console.log(`The reminder is ${topprice%pantprice} ruppees.`)
console.log(`The exponent is ${topprice**pantprice} ruppees.`)
*/


// comparison operators
/*
console.log(`Is top price greater than or equal to 300? ${topprice>=300}`)
console.log(`Is top price lesser than 1000? ${topprice<=1000}`)
console.log(`Is top price equal to 700? ${topprice==700}`)
console.log(`Is top price is not equal to 1000? ${topprice!=1000}`)
// JS doesnt see type it sees only values
let d='5';
let e=5;
console.log(d==e); // returns true
console.log(0==''); // true
console.log('null'==undefined); // true
// to compare both type and values we have to use ===
console.log('null'===undefined);
console.log(d===e);
// comparison operators for non numbers
console.log('a'<'A') // based on unicode values
console.log('a'<'b')
*/

// conditional statements
/*
let age=21;

if(age>18){
    console.log("The age is greater than 18 years");
}
else if(age==18){
    console.log("The age is equal to 18 years");

}
else{
    console.log("The age is less than 18 years");
}
*/

// alerts and prompts
/*
alert("Dont press this switch!");
console.log("simple alert");
console.error("fake alert");
console.warn("warning alert");
prompt("Please enter ur roll number");
*/


// string methods
/*
let name=" Sri Vidhya";
console.log(name.trim()); // new string is referenced to this trimmed one 
console.log(name); // orig remains const, strings are immutable in js

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name);

console.log(name.indexOf('n'));
console.log(name.indexOf('Sri')); 
console.log(name.trim().slice(3));
console.log(name.trim().slice(0,3));
console.log(name.trim().slice(-1));
console.log(name.trim().slice(-2));
console.log(name.trim().replace("Sri Vidhya","vidhu"));
console.log(name.repeat(3));
*/

// array
let students=["srividhya","charu","aparna"];
console.log(students);

let info=["srividhya" , 23, 9.5]; // need not be of same type
console.log(info);
console.log(info.length);
console.log(info[0][0]); // s
students[0]='banu';
console.log(students);

// array methods
students.push("srividhya"); // pushes at last
console.log(students);
console.log(students.pop()); // removes and returns it
students.unshift("Srividhya"); // adds at the start
console.log(students);
console.log(students.shift()); // deletes from start and returns it

console.log(students.indexOf("banu"));
console.log(students.includes("banu"));
students.reverse();
console.log(students);
console.log(students.concat(info));
console.log(students); // wont get changed by concat operation
console.log(students.concat(info).slice(0,3));
console.log(students.concat(info).slice(-1));
students.concat(info).splice(-1);
console.log(students.concat(info));
students.splice(-1);

console.log(students);
students.push("banu");
students.push("srividhya");
students.splice(0,2,"bunny","charu"); // replace 0,1 index with bunny and charu after removing
console.log(students);
students.sort();
console.log(students);

let tictac=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(tictac);