import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import ContainerComponent from "../../../components/Container/ContainerComponent";
import NavBarComponent from "../../../components/Navbar/NavBarComponent";
import axios from 'axios'

const Class4Components = () => {

    const [Class4_OptionsState,setClass4OptionsState] = useState([]);

    useEffect(() => {
        const query = {
            query: `query{
                       getAllClass4
                          {
                            Class4{
                                  id,
                                  subjects,
                                  chapters,
                            }
                          }
                       }`

        }
        axios.post("http://localhost:8080/graphql", query, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res=>{
            console.log(res)
            const new_options = []
            for (const option of res.data.data.getAllClass4.Class4) {
                new_options.push({
                    id: option.id,
                    subjects:option.subjects,
                    chapters:option.chapters,
                })
            }
            setClass4OptionsState(new_options)

        }).catch(err=>{
            console.log(err);
        })


    }, [])
    

    return (
        <div>
            <NavBarComponent/>
            <ContainerComponent heading={"Class4"}>
                <div className={"form"}>
                    <Button className={"url-button"} style={{float: "right", marginBottom: "30px"}}
                            href={"/curriculum-components/Class4/new"}>
                        Create New
                    </Button>

                    <Table striped bordered hover size="sm">
                        <tr>
                            <th>#</th>
                            <th>Subjects</th>
                            <th>Chapters</th>
                            <th/>
                        </tr>
                        <tbody>
                        {Class4_OptionsState.map((feature, i) => {
                            return (
                                <tr key={i}>
                                    <td>{(i + 1)}</td>
                                    <td>{feature.subjects}</td>
                                    <td>
                                   { feature.subjects.map((subject)=><li>{subject}</li>  )}
                                    </td>
                                    <td><a href={`/curriculum-components/Class4/edit/${feature.id}`}>Update</a></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </ContainerComponent>
        </div>
    )
}

export default Class4Components;
