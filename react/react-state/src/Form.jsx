import { useState } from "react";

function Createform(){
    let [formdata,setformdata]=useState({fullName:"",userName:""});

    function handleuserchange(event){
        let id=event.target.id;
        let val=event.target.value;
        setformdata({...formdata, [id]: val});

    }
    function handlesubmit(event){
        event.preventDefault();
        
        setformdata({fullName:"",userName:""})
    }

    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="Fullname">Full name</label>
            <input type="text" placeholder="enter ur fullname" value={formdata.fullName} onChange={handleuserchange} id="fullName"/>
            <br></br>
            <br></br>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter ur username" value={formdata.userName} onChange={handleuserchange} id="userName"/>
            <button>Submit</button>
        </form>
    )
}
export default Createform;