import React, {Component} from "react"
import NavBarComponent from "../../components/Navbar/NavBarComponent";
import Homepagedata from "../../components/Homepagecomponents/Homepageitems/Homepagedata";
const HomePage = () =>{

    return (
        <div>
            <NavBarComponent/>
            <div style={{marginTop: '61.81px'}}>
                <Homepagedata/>
            </div>
        </div>
    )
}

export default HomePage;

