import React, {useState} from "react"
import {Button, Col, Form, Row} from "react-bootstrap"
import ContainerComponent from "../components/Container/ContainerComponent";
import Image from 'next/image'
import profilePic from '../public/images/LOGO4.png'
import * as actions from "../store/actions/index";
import {connect} from "react-redux";

const LoginPage = (props) =>{
    const [login_Data,setLoginData] = useState({
        username:'',
        password:''
    })

    const onUsernameChangeHandler = (e)=>{
        setLoginData({
            ...login_Data,
            username: e.target.value
        })
    }

    const onPasswordChangeHandler = (e)=>{
        setLoginData({
            ...login_Data,
            password: e.target.value
        })
    }

    if(props.isAuthenticated)
    {
        window.location.href = '/'
    }

    const onSubmitHandler = (event)=> {
        event.preventDefault();
        props.onAuth( login_Data.username, login_Data.password);
    }

    console.log(props)
    return (
        <div>
            <Form className={'form'} onSubmit={onSubmitHandler}>
                <ContainerComponent  heading={"Login"} id={"Login"} style={{marginTop:'70.38px'}}>
                    <div className={'d-flex justify-content-center'}>
                        <Image src={profilePic} alt="Picture of the author" width={288} height={97}  />
                    </div>
                    <Row className={'d-flex justify-content-center'} style={{marginTop:'20px'}}>
                        <Col md={6} sm={12} lg={6} xs={12}>
                            <Form.Group as={Col} controlId="User_Name">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="User Name" value={login_Data.username} onChange={onUsernameChangeHandler}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={'d-flex justify-content-center'} style={{marginTop:'20px'}}>
                        <Col md={6} sm={12} lg={6} xs={12}>
                            <Form.Group as={Col} controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" value={login_Data.password} onChange={onPasswordChangeHandler}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className={'d-flex justify-content-center'}>
                        <Col md={6} sm={12} lg={6} xs={12} className={'d-flex justify-content-center'}>
                            <Button as="input"  type="submit" value="Login" className={'registerbuttonuser'}/>
                        </Col>
                    </Row>
                </ContainerComponent>
            </Form>
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

export default connect( mapStateToProps, mapDispatchToProps )(LoginPage);