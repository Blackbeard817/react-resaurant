import { Container } from "reactstrap";
import  Header  from "./components/header.js"
import MenuItemPreview from "./components/menuitemPreview.js"


export default function Area1() {

    return (
        <>
       <Header></Header>
       <h2>Welcome to the wonderful land of Lemuria, a forgotten treasure that will leave you breathless. Explore vast jungles, brave the fires of the burning plains, soak up the sun on our exotic black sand beaches, or lounge like royalty in our lavish chataues. Click into any of our regions below to explore our current packages </h2> 
       <div className="container">
           <div className="row">
                <div className="col-sm-6">
                    <h3>The Black Sands</h3>
                    {Reg1.map((item)=> {
                    return <MenuItemPreview  image={item.image} ></MenuItemPreview> })}
                    </div>
                    </div>
                    </div>  
     </>
    )};