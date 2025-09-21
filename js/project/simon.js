let userseq=[];
let actualseq=[];

let btns=["pink","orange","cadetblue","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
// wherever user presses key in the document, the game should start

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started"); // to avoid restarting again and again
        started=true;
    }
    levelinc();
})

function btnflash(btn){
    btn.classList.add("clicked");
    setTimeout(function(){
         btn.classList.remove("clicked");
    },2000)
    actualseq.push(btn.id);
}

function levelinc(){
    level++;
    h2.innerText=`Level ${level}`;

    let btnsel=Math.floor(Math.random() * (btns.length));
    // add eventlist on btnsel
    let btn=document.querySelector(`#${btns[btnsel]}`);
    console.log(btnsel);
    console.log(btn);
    btnflash(btn);    
    
}

function matchingseq(){
    console.log("actualseq array is", actualseq);
    console.log("userseq array is", userseq);
    console.log("checking");
    // if sequence so far is correct AND full length is reached
     let idx = userseq.length - 1; // last pressed button

    if (userseq[idx] !== actualseq[idx]) {
        h2.innerText = `Game over! Your score is ${level-1}. Press any key to restart`;
        level = 0;
        userseq = [];
        actualseq = [];
        started=false;
        
        return;
    }

    if (userseq.length === actualseq.length) {
        console.log("Level Passed ");
        setTimeout(levelinc, 1000); // go to next level after delay
        userseq = []; // reset for next round
    }
}



function userclick(divs){
    divs.classList.add("userclicked");
    setTimeout(function(){
         divs.classList.remove("userclicked");
    },2000)
    userseq.push(divs.id);
    matchingseq();
    

}
 let divclass=document.querySelectorAll(".key");
 for(let i=0;i<divclass.length;i++){
        divclass[i].addEventListener("click",function () {
        userclick(divclass[i]);
    });

}