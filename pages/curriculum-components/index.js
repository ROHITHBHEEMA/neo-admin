import React, {Component} from "react"
import NavBarComponent from "../../components/Navbar/NavBarComponent";
import Classes from "../../components/Curriculumpagecomponents/Curriculumpageitems/Curriculumpagedata";
const CurriculumPage = () =>{

    return (
        <div>
            <NavBarComponent/>
            <div style={{marginTop: '61.81px'}}>
                <Classes/>
            </div>
        </div>
    )
}

export default CurriculumPage;

