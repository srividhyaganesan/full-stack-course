/* for loop
for(let i=1;i<=5;i++){
    console.log(i);
}*/

/* for loop with input

let n=prompt("write ur fav number: ");
n=parseInt(n);
console.log(`The multiplication table of ${n} is`);
for(let i=n;i<=n*10;i=i+4){
    console.log(i);
}
    */

/* while loop
let i=2;
while(i<=5){
    console.log(i);
    i++;
}*/

// game
/*
let favmovie="KKK";
let n=prompt("Guess my fav movie")
k=Boolean(n);
if(n=="quit"){
    alert("Quitting.Bye");
    k=false;
}
while(k!=false){
    n=prompt("Guess my fav movie")
    k=Boolean(n);
    if(n===favmovie){
        alert("Good guess!");
        k=false;
    }
    if(n==="quit"){
        alert("Quitting.Bye!")
        k=false;
    }
}
*/

// for of movie
/*
let fruits=["apple","mango","litchi","Amla","pineapple"];
for (fruit of fruits){
    console.log(fruit);
}
*/

// todo app
/*
let todo=[];
let n=prompt("enter ur request");

while(n!="quit"){
    if(n=="list"){
        console.log(todo);
    }
    if(n=="add"){
        let k=prompt("what is the new task to add?");
        todo.push(k);
    }

    if(n=="delete"){
        let k=prompt("Which task should i delete?");
        let i=(todo.indexOf(k));
        todo.splice(i,1);
        console.log(todo);
    }

    
    n=prompt("enter your request");


}

alert("quitting.. bye!")*/


// object literal
/*
const student={
    name:"Srividhya",
    age:23,
    work:"Infinera",
    sub:["Maths","Science","Control system"],
    1:"Ganesan",
    2:"Gayatri",
    3:"Srividhya"

};

console.log(student["sub"]);
console.log(student["sub"][0]);
console.log(student.work);
console.log(student.sub[0]);
console.log(student[1]); // cant use . operator here
console.log(student[2]);
// if key is there, it will update value else it will create new key
// update value
student.sub[1]="Full stack";
student.passion="Learning code";
console.log(student);
// delete
delete student[3];
console.log(student);
*/

// Nested objects
/*
const classinfo={
    Srividhya:{
        age:22,
        grade:"O",
        Phoneno: 9025956857
    },
    Gayatri:{
         age:46,
        grade:"A+",
        Phoneno: 9791833883
    },
    Ganesan:{
         age:54,
        grade:"A",
        Phoneno: 9944825954
    }

}

console.log(classinfo);
console.log(classinfo.Srividhya.Phoneno);
*/
// Array of objects
/*
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

console.log(classinfo[0].age);
*/

// math objects
/*
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-3));
console.log(Math.floor(3.5));
console.log(Math.ceil(3.5));
console.log(Math.pow(2,4));
console.log(Math.random());

// random integer
let n=Math.ceil(Math.random()*10);
console.log(`The integer version is ${n}`);
*/

// guessing game

let maxno=prompt("Enter the max number");
maxno=parseInt(maxno);
output=Math.ceil(Math.random()*maxno);
let req=prompt("Do you want to continue?");
while(true && (req!="quit" && req!="no")){
    let n=prompt("Guess the number");
    n=parseInt(n);
    if(n===output){
        console.log("Good guess! Congo!");
        break;
    }
    else{
        req=prompt("Its ok! Do you want to try again?");
    }
}