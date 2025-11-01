import "./Product.css"
function Product(props){
    const feature=props.features.map((indfeature)=>(<li>{indfeature}</li>));
    let discountamt=props.price>50000? "5%":"0";
    let styles={backgroundColor:props.price>50000? "Pink":"yellow"};
    return (
    <div className="Product" style={styles}>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <h5>Price:{props.price}</h5>
        <p>Features:</p>
        <h5>{feature}</h5>
        <h4>Discount:{discountamt}</h4>
    </div>
    )
}

export default Product; 