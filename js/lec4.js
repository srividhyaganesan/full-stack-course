/*
async function greet(){
    return "hello !";
}

let a=greet()
.then((result)=>{
    console.log("promise was successful with output:",result);
})
.catch(()=>{
    console.log("promise was not successful");
})
*/

// await function
/*
function getnum(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let a=Math.floor(Math.random()*10+1);
            console.log(a);
            resolve();
        },2000);
    });
}

let b=async()=> {
    
    await getnum();
    await getnum();
    await getnum();
    getnum();
    getnum();
}
    */

// change color using promise and await
/*
let h1=document.querySelector("h1");
function changecolor(inputcolor){
    return new Promise((resolve,reject)=>{
        if(inputcolor=="blue"){
                reject("sorry blue color cant be changed");
        }
        else{
            setTimeout(()=>{
            h1.style.color=inputcolor;
            console.log("promise is fullfilled");
            resolve();
        },2000);

        }  
    });
}

async function setcolor () {
    try{
    await changecolor("orange");
    await changecolor("red");
    await changecolor("blue");
    await changecolor("green");

    }
    catch(err){
        console.log("some error in catch block",err);
    }
    console.log("iam trying to understand");
    
    
}
    */

// json parse
/*

let jsondata='{"student":"srividhya","rollno": 2020504589}';
let output=(JSON.parse(jsondata));
console.log(output);
let revoutput=JSON.stringify(output);
console.log(revoutput);

// api request
let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((output)=>{
    console.log(output);
    return fetch(url);
})
    
.then((response2)=>{
    console.log(response2);
    return response2.json()
})
.then((output2)=>{
    console.log(output2);
})

.catch((err)=>{
    console.log(err);
})
    */

// axios
/*
let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
btn.addEventListener("click",()=>funfacts(url));
async function funfacts(url){
    try{
        let output=await axios.get(url)
        console.log(output);
        console.log(output.data.fact);
    }
    catch(err){
        console.log("output=",err);

    }
    

}
    */
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let college= await geturl(url,country);
    console.log(college);
    let ul=document.querySelector("#list");
    ul.innerHTML="";
    for(let i=0;i<college.length;i++){
        let li=document.createElement("li");
        li.innerText=college[i].name;
        ul.appendChild(li);
    }
}
    );

async function geturl(url,country){
    let res=await axios.get(url+country);
    return res.data;

}
