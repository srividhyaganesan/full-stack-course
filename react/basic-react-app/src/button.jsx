function print(){
    console.log("hello world");
}

function hover(){
    console.log("hovered");
}

function Buttonclick(){
    return(
        <div>
            <button onClick={print}>Click me!</button>
        </div>
    )
}

function Buttonhover(){
    return(
        <div>
            <button onMouseOver={hover}>Hover here!</button>
        </div>
    )
}

export {Buttonclick,Buttonhover} ;