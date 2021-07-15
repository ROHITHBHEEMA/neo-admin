import React, {Component} from "react"
import NavBarComponent from "../components/Navbar/NavBarComponent";
import Homedata from "../components/Home/Home";
import * as actions from "../store/actions";
import {connect} from "react-redux";


const HomePage = (props) =>{
    if(!props.isAuthenticated)
    {
        window.location.href = '/login'
    }
    return (
        <div>
            {props.isAuthenticated ?
                <>
                    <NavBarComponent/>
                    <div style={{marginTop: '61.81px'}}>
                        <Homedata/>
                    </div>
                </>
                :''
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.auth( email, password ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect( mapStateToProps,mapDispatchToProps)(HomePage)
