let taxswitch=document.getElementById("taxswitch");
taxswitch.addEventListener("click",()=>{
    let taxinfo=document.getElementsByClassName("tax-info");
    for(let i=0;i<taxinfo.length;i++){
        let info=taxinfo[i];
        if(info.style.display!="inline"){
            info.style.display="inline";
        }
        else{
            info.style.display="none";
        }
         
    }

});