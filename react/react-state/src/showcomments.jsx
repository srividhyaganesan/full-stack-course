import { useState } from "react";
import './comments.css'
import CommentsForm from "./commentsform";
function Showcomments(){
    let [comments,setcomments]=useState([{
        username:"srividhya",
        remarks:"good movie",
        ratings:5
    }]);

    function addComment(comment){
        setcomments([...comments,comment]);

    }

    return(
        <div className="totalcomment">
        <div className="comments">
            <ul>
                {comments.map((allcomments)=><li >
                    <div>Username : {allcomments.username}</div>
                    <div>Remarks: {allcomments.remarks}</div>
                    <div>Ratings: {allcomments.ratings}</div>
                    <hr></hr>
                </li>)}
            </ul>
            <br></br>
        </div>
        <CommentsForm addComment={addComment}/>
        </div>

        
    )


}

export default Showcomments;