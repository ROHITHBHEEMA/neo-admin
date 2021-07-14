import React, {Component} from "react"
import PageHOC from "../hoc/PageHOC";
import NavBarComponent from "../components/Navbar/NavBarComponent";
import Homedata from "../components/Home/Home";
const HomePage = () =>{

    return (
        <div>
            <NavBarComponent/>
            <div style={{marginTop: '61.81px'}}>
                <Homedata/>
            </div>
        </div>
    )
}

export default HomePage;

