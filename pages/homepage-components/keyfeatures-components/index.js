import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import ContainerComponent from "../../../components/Container/ContainerComponent";
import NavBarComponent from "../../../components/Navbar/NavBarComponent";
import axios from 'axios'

const KeyfeaturesComponents = () => {

    const [keyfeatures_OptionsState,setKeyfeaturesOptionsState] = useState([]);

    useEffect(() => {
        const query = {
            query: `query{
                       getAllKeyfeatures
                          {
                            keyfeatures{
                                  id,
                                  title,
                                  description,
                                  icon,
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
            for (const option of res.data.data.getAllKeyfeatures.keyfeatures) {
                new_options.push({
                    id: option.id,
                    title:option.title,
                    description:option.description,
                    icon:option.icon
                })
            }
            setKeyfeaturesOptionsState(new_options)

        }).catch(err=>{
            console.log(err);
        })


    }, [])

    return (
        <div>
            <NavBarComponent/>
            <ContainerComponent heading={"Key Features"}>
                <div className={"form"}>
                    <Button className={"col-4 url-button"} style={{float: "right", marginBottom: "30px"}}
                            href={"/homepage-components/keyfeatures-components/new"}>
                        Create New
                    </Button>

                    <Table striped bordered hover size="sm">
                        <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>description</th>
                            <th>icon</th>
                            <th/>
                        </tr>
                        <tbody>
                        {keyfeatures_OptionsState.map((feature, i) => {
                            return (
                                <tr key={i}>
                                    <td>{(i + 1)}</td>
                                    <td>{feature.title}</td>
                                    <td>{feature.description}</td>
                                    <td>{feature.icon}</td>
                                    <td><a href={`/homepage-components/keyfeatures-components/edit/${feature.id}`}>Update</a></td>
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

export default KeyfeaturesComponents;
