import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap"
import ContainerComponent from "../../Container/ContainerComponent";
import {convertJsonToGQL, jsonToGQLString} from "../../../lib/utility";
import axios from "axios"
import NavBarComponent from "../../Navbar/NavBarComponent";
import CreatableSelect from 'react-select/creatable';


const Class7Component = (props) =>{
    const [editing_State,setEditingState] = useState(false);
    const [is_Data,setIsdata] = useState(false);
    const [form_State,setFormState] = useState({
        id:'',
        subjects:'',
        chapters:[],
    });

    const getdata = () =>{
        setFormState({
            id:props.id,
            subjects:props.subjects,
            chapters:props.chapters,
        })
        setEditingState(true);
        setIsdata(true);
    }

    if(props.edit===true && is_Data===false)
    {
        getdata();
    }


    const onsubjectsChangeHandler = (e) =>{
        if (value !== null) {
            const new_values = []
            for (const option of value) {
                new_values.push(option.value)
            }

            setFormState({
                ...FormState,
                chapters: new_values,
                chapter: value
            })
        } else {
            setFormState({
                    ...FormState,
                    chapters: [],
                    chapter: []
                }
            )
        }
    }

    const onchaptersChangeHandler = (e) =>{
        setFormState({
            ...form_State,
            chapters:  [...value, createOption(inputValue)],
        })
    }

    console.log(props)

    function onSubmitHandler(event) {
        event.preventDefault();

        let form_data={};

        form_data = {
            subjects:form_State.subjects,
            chapters:form_State.chapters,
        }

        if(editing_State===true)
        {
            const update_query = {
                query: `
                mutation{
                    updateclass7byid(id:"${form_State.id}",class7:class7_data){
                        id
                    }
                }
            `
            }
            update_query.query = convertJsonToGQL(update_query.query, form_data, "class7_data")
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
                            <Form.Group as={Col} controlId="subjects">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" onChange={onsubjectsChangeHandler}
                                              value={form_State.subjects}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={12} sm={12} lg={12} xs={12}>
                            <Form.Group as={Col} controlId="chapters">
                                <Form.Label>Chapters</Form.Label>
                                {/* <Form.Control as="textarea" rows={3} placeholder="chapters" onChange={onchaptersChangeHandler}
                                              value={form_State.chapters}
                                              required
                                />
                                <Form.Control.Feedback type="invalid">
                                    This Field Cannot be left empty
                                </Form.Control.Feedback> */}
                                <CreatableSelect
                                    isClearable
                                    isMulti
                                    name="tags"
                                    options={TagOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="Add tags"
                                    value={FormState.tag}
                                    onChange={(value) => onchaptersChangeHandler('tags',value)}
                                    style={{borderRadius:'0px'}}
                                />

                            </Form.Group>

                        </Col>




                    </Row>
                </ContainerComponent>
                <div className={'d-flex justify-content-center'}>
                    <Button as="input"  type="submit" value={editing_State? "Update": "Submit"} className={'registerbuttonuser'}/>
                </div>

            </Form>
        </div>
    )
}



export default Class7Component;