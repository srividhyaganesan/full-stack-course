import { useState } from "react";

function LikeButton(){
    
    let [like,changecolor]=useState("false");
    function togglelike(){
        changecolor(!like);

    }
    let styles={color:like?"Red":"Black"};
    return (
    <div>
            <i className="fa-solid fa-heart" onClick={togglelike} style={styles}></i>    
    </div>
    )
   
}
export default LikeButton;