import MainNav from "./mainnav"

export default function Header() {

    return (
        <>
        <div className="container.header">
            <div className="row">
                <div className="col-sm-6">
                    <MainNav></MainNav>
                </div>
            </div>
        <div className="container.header">
                
            <div className="col-sm-12">
                   <h1>Fett's Filetts</h1>
                </div>
            </div>
        </div>
            

        </>
    )
}