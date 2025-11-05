import { use } from "react";
import { useState } from "react";

function Lottery(){

    let [randnum,setrandnum]=useState(null);
    let [ticket,checkticket]=useState(false);
    const generateThreeDigitNumber = () => {
    // Generate a random number between 100 (inclusive) and 999 (inclusive)
    const min = 100;
    const max = 999;
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setrandnum(newRandomNumber);
    checklottery(newRandomNumber)
  };

  function checklottery(n){
    let total = 0;

    while (n > 0) {
      total += n % 10;
      n = Math.floor(n / 10);
    }
    console.log(total);
    if(total==15){
        checkticket(true)
    }
    else{
        checkticket(false)
    }
    
  }
 

    return(
        <div>
            <h1>{ticket?"Lottery, congo u have won!":"Lottery"}</h1>
            <br></br>
            <h3>{randnum?`Lottery ticket=${randnum}`:"Lottery ticket"}</h3>
           
            <br></br>
            <button onClick={generateThreeDigitNumber}>Get ticket</button>
        </div>
    )
}
export default Lottery;