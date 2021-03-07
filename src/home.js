import  Header  from "./components/header.js"
import MenuItemPreview from "./components/menuitemPreview.js"

export default function Home() {

    const appetizers = [ 
        {
            "name": "Womprat Soup",
            "image": "https://pics.livejournal.com/fenilla/pic/0000569b/s640x480",
            "description": "This is where it all began. Who doesnt remebmer mom making a hearty Womprat soup? Made inside reclaimed pots from Jawa's our soup will take you home when you smell those local Tuskin Raider spices. Served with your choice of Blue Milk or Fizzwater"
        }
    ];
    const filets = [ 
        {
            "name": "Sarlec Filet Mignon",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFRmHCbNikAQxu_TbDYNSpTCUe9SVH_Dv8Gg&usqp=CAU",
            "description": "There are few meats in the galaxy worth traveling for. Fewer still worth preparing yourself like Sarlec. With this once in a lifetime offer you and your closest friends and family can hunt and enjoy this rare treat. Not for the faint of heart."
        }
    ];

    const desserts = [ 
        {
            "name": "The Scruffy Nerfherder",
            "image": "https://assets.bonappetit.com/photos/57ace50bf1c801a1038bc8af/16:9/w_400%2Cc_limit/blueberry-pecan-galette2.jpg",
            "description": "Sand Crusted Bantha Fat - This is a favortie among the locals for it's robust flavor and unforgettable smell."
        }
    ];

    const Special = [ 
        {
            "name": "Krayt Dragon Egg Omlette",
            "image": "https://media3.s-nbcnews.com/i/newscms/2016_13/1475476/160328-bessieres-giant-omelette-03_2760ea79c1ce6db477365eb719870348.jpg",
            "description": "This rare treat is only available every five years. Taking several hours and many chefs to prepare, this breakfast feast is a must have."
        }
    ];



    return (
        <>
       <Header></Header>
       
       <div className="container">
           <div className="row">
                <div className="col-sm-12">
                    <h2>Starters </h2>  
                    {appetizers.map((item)=> {
                    return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
})} 
                </div>
                <div className="col-sm-12">
                    <h2>Fett's Famous Filets</h2>
                    {filets.map((item)=> {
                    return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
})} 
                    <h2>Desserts</h2>
                    {desserts.map((item)=> {
                    return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
})} 
                     <h2>Special</h2>
                    {Special.map((item)=> {
                    return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
})} 
                </div>
           </div>
       </div>
        </>

    )
};