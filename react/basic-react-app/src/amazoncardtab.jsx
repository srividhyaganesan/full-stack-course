import AmazonCard from "./amazoncard";
function Amazoncardtab(){
    return (
        <div class="totaltab">

            <AmazonCard title="Logitech" description="8000 DPI,programmable pen" oldprice={1000} newprice={500}/>
            <AmazonCard title="Apple pencil" description="Intutive touch interface" oldprice={11900} newprice={9199}/>
            <AmazonCard title="Zebronics" description="Designed for IPAD pro" oldprice={1599} newprice={899}/>
            <AmazonCard title="Portronics" description="Wireless mouse 2.4ghz" oldprice={599} newprice={278}/>
            <AmazonCard title="samsung" description="high camera quality" oldprice={19999} newprice={12000}/>

        </div>
    )

}
export default Amazoncardtab;