import React, {Component, Fragment} from "react"
import NavBarComponent from "../components/Navbar/NavBarComponent"
import {Col} from "react-bootstrap"

const PageHOC = (WrappedComponent, heading) => {

            return (
                    <Fragment>
                        <NavBarComponent />
                        <div style={{marginBottom: "200px"}}>
                            <Col style={{textAlign: "center", marginTop: "20px"}} className={"col-12"}>
                                <h1>{heading}</h1>
                            </Col>
                            <WrappedComponent />
                        </div>
                    </Fragment>
            )

}

export default PageHOC
