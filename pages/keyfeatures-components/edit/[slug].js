import React, {useEffect, useState} from "react";
import axios from "axios"
import { useRouter } from 'next/router'
import KeyfeaturesComponent from "../../../components/Homepagecomponents/KeyfeaturesComponent/KeyfeaturesComponent";


const KeyFeaturesDetail = (props) =>{
    const [form_State,setFormState] = useState({
        edit:true,
        id:'',
        title:'',
        description:'',
        icon:'',
    });
    const [is_Data,setIsData] = useState(false)
    const router = useRouter();

    const getdata = () => {
        const query = {
            query: `query{
                           getKeyfeaturebyid(id:"${router.query.slug}"){
                                id,
                                title,
                                description,
                                icon
                            }
                        }`
        }
        axios.post("http://localhost:8080/graphql", query, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res)
            const key_data = res.data.data.getKeyfeaturebyid;

            setFormState({
                ...form_State,
                id:key_data.id,
                title:key_data.title,
                description:key_data.description,
                icon:key_data.icon
            })

            setIsData(true)

        }).catch(err => {
            console.log(err);
        })

    }
    useEffect(() => {
        if(is_Data===false)
        {
            if (router.asPath !== router.route) {
                getdata()
            }
        }
    }, [router])

    return (
        <div>
            {is_Data?<KeyfeaturesComponent
                edit={form_State.edit}
                id={form_State.id}
                title={form_State.title}
                description={form_State.description}
                icon={form_State.icon}
            />:""}
        </div>
    )
}

export default KeyFeaturesDetail;
