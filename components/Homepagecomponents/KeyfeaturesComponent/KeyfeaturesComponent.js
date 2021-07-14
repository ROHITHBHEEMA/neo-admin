import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap"
import ContainerComponent from "../../Container/ContainerComponent";
import {convertJsonToGQL, jsonToGQLString} from "../../../lib/utility";
import axios from "axios"
import NavBarComponent from "../../Navbar/NavBarComponent";


const KeyfeaturesComponent = (props) =>{
    const [editing_State,setEditingState] = useState(false);
    const [is_Data,setIsdata] = useState(false);
    const [form_State,setFormState] = useState({
        id:'',
        title:'',
        description:'',
        icon:''
    });

    const getdata = () =>{
        setFormState({
            id:props.id,
            title:props.title,
            description:props.description,
            icon:props.icon
        })
        setEditingState(true);
        setIsdata(true);
    }

    if(props.edit===true && is_Data===false)
    {
        getdata();
    }


    const onTitleChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            title: e.target.value
        })
    }

    const onIconChangeHandler = (e) => {
        setFormState({
            ...form_State,
            icon: e.target.value
        })
    }

    const onDescriptionChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            description: e.target.value
        })
    }

    console.log(props)

    function onSubmitHandler(event) {
        event.preventDefault();

        let form_data={};

        form_data = {
            title:form_State.title,
            description:form_State.description,
            icon:form_State.icon
        }

        if(editing_State===true)
        {
            const update_query = {
                query: `
                mutation{
                    updatekeyfeaturesbyid(id:"${form_State.id}",keyfeature:key_feature_data){
                        id
                    }
                }
            `
            }
            update_query.query = convertJsonToGQL(update_query.query, form_data, "key_feature_data")
            axios.post("http://localhost:8080/graphql", update_query).then(res => {
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div>
            <NavBarComponent/>
            <Form className={'form'} onSubmit={onSubmitHandler}>
                <ContainerComponent heading={"Key Features"} style={{marginTop:'70.38px'}}>
                    <Row style={{marginTop:'20px'}}>

                        <Col md={6} sm={12} lg={6} xs={12}>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" onChange={onTitleChangeHandler}
                                              value={form_State.title}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6} sm={12} lg={6} xs={12}>
                            <Form.Group as={Col} controlId="icon">
                                <Form.Label>Icon</Form.Label>
                                <Form.Control type="text" placeholder="Icon" onChange={onIconChangeHandler}
                                              value={form_State.icon}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={12} sm={12} lg={12} xs={12}>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="description" onChange={onDescriptionChangeHandler}
                                              value={form_State.description}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>




                    </Row>
                </ContainerComponent>
                <div className={'d-flex justify-content-center'}>
                    <Button as="input" variant="danger" type="submit" value={editing_State? "Update": "Submit"} className={'registerbuttonuser'}/>
                </div>

            </Form>
        </div>
    )
}



export default KeyfeaturesComponent;