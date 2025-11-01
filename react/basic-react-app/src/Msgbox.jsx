function Msgbox(props){
    let styles={color:props.textcolor,border:"5px solid black",borderRadius:"5px",width:"500px"};
    return(
        <div className="msgbox" style={styles}>
            <h5>Hello {props.username}</h5>
        </div>
    )

}

export default Msgbox;