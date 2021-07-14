import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {IoIosArrowForward} from 'react-icons/io'


function Homepageitems (props) {
    return (
        <div className={'box-main'}>
            <a href={props.route} style={{textDecoration: 'none'}}>
                <Row>
                    <Col xs={3} sm={3} lg={3} md={3}>
                        <div style={{backgroundColor: `${props.color}`}} className={'person-box'}>
                            {props.icon}
                        </div>
                    </Col>
                    <Col xs={7} sm={7} lg={7} md={7} >
                        <div className={'box-title'}>
                            {props.title}
                        </div>
                    </Col>
                    <Col xs={2} sm={2} lg={2} md={2}>
                        <div>
                            <IoIosArrowForward className={'arrow'}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{backgroundColor: props.color}} className={'bottom-line'}>
                        </div>
                    </Col>
                </Row>
            </a>
        </div>
    )
}

export default Homepageitems
