import "./amazoncard.css"
function AmazonCard(props){
    return (
        <div class="totaltab">
        <div class="amazoncard">
            <div class="desc">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <hr></hr>
                <div class="price">
                    <h4 class="old">Rs:{props.oldprice}</h4>
                    <h4 class="new" >Rs:{props.newprice}</h4>
                </div>
                

            </div>
        </div>
        </div>
    )
}
export default AmazonCard;