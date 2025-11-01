import Product from "./Product"
function Producttab(){
    return(
        <> 
        <Product title="iphone" description="This is iphone 17 with good camera quality" features={["AI integrated!","good camera quality"]} price={80000}/>
        <Product title="Mac" description="Enjoy seamless working with mac!" features={["fast","reliable"]} price={130000}/>
        <Product title="Flair Pen" description="Get extra marks for good handwriting!" features={["smudgeless","smooth"]} price={10}/>
        </>
    )
}

export default Producttab;