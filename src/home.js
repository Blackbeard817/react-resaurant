import { Container } from "reactstrap";
import  Header  from "./components/header.js"
import MenuItemPreview from "./components/menuitemPreview.js"

export default function Home() {

    const Reg1 = [ 
        {
            "name": "The Black Sands",
            "image": "https://ucarecdn.com/1556904e-9a5d-4883-bb9f-79c5ab7c955f/-/resize/1000x/-/format/auto/-/progressive/yes/-/quality/lightest/",
            "description": "This is where it all began. Who doesnt remebmer mom making a hearty Womprat soup? Made inside reclaimed pots from Jawa's our soup will take you home when you smell those local Tuskin Raider spices. Served with your choice of Blue Milk or Fizzwater"
        }
    ];
    const Reg2 = [ 
        {
            "name": "The City of Brass",
            "image": "https://www.prestigeroofinglv.com/wp-content/uploads/2017/09/bigstock-berliner-dom-198415015.jpg",
            "description": "There are few meats in the galaxy worth traveling for. Fewer still worth preparing yourself like Sarlec. With this once in a lifetime offer you and your closest friends and family can hunt and enjoy this rare treat. Not for the faint of heart."
        }
    ];

    const Reg3 = [ 
        {
            "name": "The Buring Plains",
            "image": "https://e360.yale.edu/assets/site/GettyImages-1228574257_Bobcat-Fire_Sept-2020_web.jpg",
            "description": "Sand Crusted Bantha Fat - This is a favortie among the locals for it's robust flavor and unforgettable smell."
        }
    ];

    const Reg4 = [ 
        {
            "name": "Mountain Palace",
            "image": "https://i.stack.imgur.com/XVwDN.jpg",
            "description": "This rare treat is only available every five years. Taking several hours and many chefs to prepare, this breakfast feast is a must have."
        }
    ];



    return (
        <>
       <Header></Header>
       <h2>Welcome to the wonderful land of Lemuria, a forgotten treasure that will leave you breathless. Explore vast jungles, brave the fires of the burning plains, soak up the sun on our exotic black sand beaches, or lounge like royalty in our lavish chataues. Click into any of our regions below to explore our current packages </h2> 
       <div className="container">
           <div className="row">
                <div className="col-sm-6">
                    <h3>The Black Sands</h3>
                    {Reg1.map((item)=> {
                    return <MenuItemPreview  image={item.image} ></MenuItemPreview>
                    
})} 
                </div>
                <div className="col-sm-6">
                <h3>City of Brass</h3>
                    {Reg2.map((item)=> {
                    return <MenuItemPreview image={item.image} ></MenuItemPreview>
})} </div>
        <div className="container">
            <div className="row">
            <div className="col-sm-6">
            <h3>The Burning Plains</h3>
                    {Reg3.map((item)=> {
                    return <MenuItemPreview image={item.image} ></MenuItemPreview>
})} </div>
                    <div className="col-sm-6">
                    <h3>Mountain Palace</h3>
                    {Reg4.map((item)=> {
                    return <MenuItemPreview image={item.image} ></MenuItemPreview>
})} </div>
                </div>
           </div>
       
       </div>
       </div>
        </>

    )
};