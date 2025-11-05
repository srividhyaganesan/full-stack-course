import { useState } from "react";
import "./Ludo.css"

function Ludo(){
    let [moves,setmoves]=useState({blue:0,green:0,red:0,yellow:0});
    function incbluecount(){
        moves.blue+=1;
        setmoves({...moves});

    }
    function incgreencount(){
        moves.green+=1;
        setmoves({...moves});

    }
    function incredcount(){
        moves.red+=1;
        setmoves({...moves});

    }
    function incyellowcount(){
        moves.yellow+=1;
        setmoves({...moves});

    }
    
    return(
        
        <div class="Board">
            <p>Blue moves</p>
            <button className="blue" onClick={incbluecount}>+{moves.blue}</button>
            <p>Green moves</p>
            <button className="green" onClick={incgreencount}>+{moves.green}</button>
            <p>Yellow moves</p>
            <button className="yellow" onClick={incyellowcount}>+{moves.yellow}</button>
            <p>Red moves</p>
            <button className="red" onClick={incredcount}>+{moves.red}</button>
        </div>
    )
}
export default Ludo;