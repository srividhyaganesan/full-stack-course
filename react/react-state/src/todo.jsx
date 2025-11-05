import { use } from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function Todo(){
    let [origarr,todoarr]=useState([{task:"sample",id:uuidv4(),completed:false}]);
    let [todo,newtodo]=useState("")
    
    function addtask(event){
        todoarr([...origarr,{task:todo,id:uuidv4()}]);
        newtodo("");
    }

    function addtodo(event){
        newtodo(event.target.value);
    }
    function deletetodo(id){
        todoarr(origarr.filter((deletetask)=>deletetask.id!=id))
    }

    function updateall(){
        origarr.map((updateall)=>{
            updateall.task=updateall.task.toUpperCase()
        })
        todoarr([...origarr])
    }
    function updateone(id){
        origarr.map((updateone)=>{
            if(updateone.id==id){
                updateone.task=updateone.task.toUpperCase();
            }
        })
        todoarr([...origarr])
    }
    function crossone(id){
        origarr.map((crossone)=>{
            if(crossone.id==id){
                crossone.completed=true;
            }
        })
        todoarr([...origarr])

    }
    function markalldone(){
        origarr.map((markalldone)=>{
            markalldone.completed=true;
        })
        todoarr([...origarr])
    }
    return(
        <div className="Todo">
            <h3>Add ur task here</h3>
            <br></br>
            <br></br>
            <input type="String" placeholder="enter ur task" value={todo} onChange={addtodo}></input>
            <br></br>
            <br></br>
            <button onClick={addtask}>Click here</button>
            <hr></hr>
            <h3>Tasks to do</h3>
            <ul>
                {origarr.map((tasktodo)=>(<li key={tasktodo.id} style={{ textDecoration:tasktodo.completed?'line-through':'none' }}> 
                    <span>{tasktodo.task}</span>
                    <button onClick={()=>deletetodo(tasktodo.id)}>delete</button>
                    <button onClick={()=>updateone(tasktodo.id)}>edit</button>
                    <button onClick={()=>crossone(tasktodo.id)}>done</button>
                    </li >))}
                

            </ul>
            <br></br><br></br>
            <button onClick={updateall}>update all</button>
            <button onClick={markalldone}>All done</button>
        </div>
    )
}
export default Todo;