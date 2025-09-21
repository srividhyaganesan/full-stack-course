/*
let imgobj=document.getElementById("mainImg");
console.log(imgobj);
console.dir(imgobj);
let classobj=document.getElementsByClassName("boxLink");
console.log(classobj);
console.dir(classobj);

for(let i=0;i<classobj.length;i++){
    classobj[i].accessKey="hello";
}

let tagobj=document.getElementsByTagName("li");
console.log(tagobj);
console.dir(tagobj);

// query selectors
console.dir(document.querySelector("p") );// selects 1st paragraph element
console.dir(document.querySelector("#mainImg")); // selects only 1 id
console.dir(document.querySelector(".boxLink")); // selects first tag under boxlink class
console.dir(document.querySelectorAll(".boxLink") );// selects all elements under boxlink

// Setting content in obj

console.dir(document.querySelector("p").innerText) ;// shows visible text
console.dir(document.querySelector("p").innerHTML) ; // shows all markup content
console.dir(document.querySelector("p").textContent) ; // shows the exact way in which html file is written


// getters and setters
imgobj.setAttribute('id','spidermanimg'); // setting id as different so image size will be original 

// manipulating style
let heading=document.querySelector("h1");
console.dir(heading);
console.log(heading.style);
heading.style.color="green"; // inline has higher pref

let li=document.querySelectorAll(".boxLink");
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor="pink";
}

// classlist property
heading.classList.add("classlist"); // since inline style has higher pref, color will be green
heading.classList.add("underline");
heading.setAttribute('class','underline') ; // in this case, classlist properties will be vanished. One val can be set at a time
heading.classList.remove("underline");
heading.classList.add("classlist");
console.log(heading.classList.contains("classlist")); // true
console.log(heading.classList.contains("underline")); // false
heading.classList.toggle("classlist") ; // since classlist is true, it removes it (basically not operation)
heading.classList.toggle("underline"); // since underline is not there, it adds them


// navigation page
let box=document.querySelector(".box");
console.log(box.children); //h4 ul
console.log(box.childElementCount); //2
let ul=document.querySelector("ul");
let lis=ul.children;
console.log(ul.children[0].nextElementSibling);
console.log(ul.children[1].previousElementSibling);

// adding elements on page
let newpara=document.createElement("p");
let body=document.querySelector("body");
newpara.innerText="Hi, this is Srividhya. Lets see where this content will be inserted in the page.";
body.appendChild(newpara);
newpara.append("Adding more contents .. ");
newpara.prepend("Prepending more contents..");
let btn=document.createElement("button");
btn.innerText="Please click here!";
box.insertAdjacentElement("beforebegin",btn); // inserts before box class starts
box.insertAdjacentElement("afterbegin",btn);
box.insertAdjacentElement("beforeend",btn);
box.insertAdjacentElement("afterend",btn);

// removing elements
body.removeChild(newpara);
// body.remove(); // entire body tag will be removed

// practice qn
let newpara2=document.createElement("p");
newpara2.innerText="Hey Iam red!";
body.appendChild(newpara2);
newpara2.style.color="red";

let h3=document.createElement("h3");
h3.innerText="Hey Iam blue!";
body.appendChild(h3);
h3.style.color="blue";

let div=document.createElement("div");
body.appendChild(div);
div.style.borderColor="black";
div.style.borderWidth="2px";
div.style.borderStyle="solid";
div.style.backgroundColor="pink";
let newpara3=document.createElement("p");
let h1=document.createElement("h1");
div.appendChild(h1);
div.appendChild(newpara3);
h1.append("I'm inside div");
newpara3.append("Me too!");
*/

// DOM events 

//onclick , onmouse enter
let box=document.querySelector(".box");
let btn=document.createElement("button");
btn.innerText="Please click here!";
box.insertAdjacentElement("afterbegin",btn);
const createalert=()=>{
    alert("response submitted!");
}
const zoominfo=(btn)=>{
    btn.style.fontSize='20px';
    btn.style.backgroundColor='pink';
}
//btn.onclick = n=>(console.log("button is clicked"));
//btn.onclick=createalert;
// btn.onmouseenter=()=>zoominfo(btn);

// event listeners 
// add event listener - combines multiple events together
/*
btn.addEventListener("click",()=>createalert());
btn.addEventListener("click",()=>zoominfo(btn));


// activity
let body=document.querySelector("body");
let newpara2=document.createElement("p");
newpara2.innerText="Hey Iam gonna generate random color";
body.appendChild(newpara2);

let btn1=document.createElement("button");
btn1.innerText="Color generator";
body.appendChild(btn1);

let div=document.createElement("div");
body.appendChild(div);
div.style.borderColor="black";
div.style.borderWidth="2px";
div.style.borderStyle="solid";
let newpara3=document.createElement("p");
let h1=document.createElement("h1");
div.appendChild(h1);
div.appendChild(newpara3);
h1.append("I'm inside div");
newpara3.append("Me too!");

function generaterandomcolor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    return [red,blue,green];
}

function changecolor(allcolor){
    let red=allcolor[0];
    let blue=allcolor[2];
    let green=allcolor[1];
    newpara2.style.color=`rgb(${red},${blue},${green})`;
    div.style.color=`rgb(${red},${blue},${green})`;
}
btn1.addEventListener("click",()=>{
    let allcolor=generaterandomcolor();
    changecolor(allcolor);});
console.log(allcolor);

*/

// keyboard events
/*
let body=document.querySelector("body");

let btn1=document.createElement("button");
btn1.innerText="Color generator";
body.appendChild(btn1);

btn1.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
})

let input=document.querySelector("input");

input.addEventListener("keydown",function(){
    console.log("key was pressed");
})

input.addEventListener("keyup",function(){
    console.log("key was released");
})


let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault(); // prevents default action that happens in submitting the form
    alert("submitted successfully");
})


// similar events- input,stoppropogation,changeevent
*/

// activity
let input=document.querySelector("input");
let btn2=document.querySelectorAll("button");
let button=btn2[1];
let ul=document.querySelectorAll("ul");
let output=ul[2];
button.addEventListener("click",function(){
    let value=input.value;
    let li=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add="delete";
    li.innerText=value;
    output.appendChild(li);
    li.appendChild(delbtn);
    input.value="";
})
// it wont work for new button added so use event bubbling
/*
let delbtns=document.querySelectorAll(".delete");
for(let i=0;i<delbtns.length;i++){
    delbtns[i].addEventListener("click",function(){
        console.log("element removed");
        let parent=delbtns[i].parentElement;
        parent.remove();
    })
}*/

output.addEventListener("click",function(event){
    console.log(event.target.nodeName);
    console.log(event.target);
    if(event.target.nodeName=="BUTTON"){
        let parent=event.target.parentElement;
        parent.remove();
    }
})