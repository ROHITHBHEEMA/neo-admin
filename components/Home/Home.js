import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Homeiems from "./Homeitems"
import {PAGE_DETAILS} from "../../assests/page"


function Homedata() {
    return (
        <Col md={12} lg={9} className={'pl-2 pl-md-0 pl-lg-5'}>
            <Row style={{marginLeft: '0px', marginRight: '0px', alignItems: 'center'}}>
                {Object.keys(PAGE_DETAILS).map((key, i) => {
                    const details = PAGE_DETAILS[key]
                        return (
                            <Col lg={6} sm={12} xs={12} md={6} className={'mb-3 mb-md-4 mb-lg-4'} key={i}>
                                <Homeiems
                                    icon={details.icon}
                                    title={details.heading}
                                    color={details.color}
                                    route={details.link}
                                />
                            </Col>
                        )

                })}
            </Row>
        </Col>
    )
}


export default Homedata