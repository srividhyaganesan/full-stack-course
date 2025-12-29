import { useState } from "react";
import { useFormik } from "formik";
function CommentsForm({addComment}){
    /*
    let [formdata,Setformdata]=useState({
        username:"",
        remarks:"",
        ratings:5

    })
        */
    const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      ratings: 5,
    },

    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.remarks) {
        errors.remarks = "Remarks are required!";
      }
      if (!values.ratings) {
        errors.ratings = "Ratings are required!";
      } 
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      addComment(values);
      resetForm();
    },
  });
  /*

    function handleinputchange(event){
        let value=event.target.value;
        let id=event.target.id;
        Setformdata({...formdata,[id]:value});

    }
    function handlesubmit(event){
        event.preventDefault();
        console.log(formdata);
        addComment(formdata);
        Setformdata({username:"",
        remarks:"",
        ratings:5});
    }
        */
    return(
        <div>
            <h4>Comments Section</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="enter ur username" name="Username" value={formik.values.username} id="username" onChange={formik.handleChange}/>
                {formik.errors.username ? <div>{formik.errors.username}</div>:null}
                <br></br>
                <br></br>
                 <label htmlFor="remarks">Remarks</label>
                <textarea value={formik.values.remarks} placeholder="add few remarks" id="remarks" onChange={formik.handleChange}>Remarks</textarea>
                {formik.errors.remarks ? <div>{formik.errors.remarks}</div>:null}
                <br></br>
                <br></br>
                 <label htmlFor="ratings">Ratings</label>
                <input type="number" placeholder="ratings" min={1} max={5} value={formik.values.ratings} id="ratings" onChange={formik.handleChange}/>
                {formik.errors.ratings ? <div>{formik.errors.ratings}</div>:null}
                <br></br>
                <br></br>
                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}

export default CommentsForm;