import { useState } from "react";


function Counter(){
    let [count,setcount]=useState(0);

    function inccount(){
        setcount(count+1);
}

    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={inccount}>Click here</button>
        </div>
    )
}

export default Counter;