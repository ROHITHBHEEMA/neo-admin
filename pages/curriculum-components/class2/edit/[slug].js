import React, {useEffect, useState} from "react";
import axios from "axios"
import { useRouter } from 'next/router'
import Class2Component from "../../../../components/Curriculumpagecomponents/Class2Component/Class2Component";


const Class2Detail = (props) =>{
    const [form_State,setFormState] = useState({
        edit:true,
        id:'',
        subjects:'',
        chapters:[],
    });
    const [is_Data,setIsData] = useState(false)
    const router = useRouter();

    const getdata = () => {
        const query = {
            query: `query{
                           getClass2byid(id:"${router.query.slug}"){
                                id,
                                subjects,
                                chapters,
                            }
                        }`
        }
        axios.post("http://localhost:8080/graphql", query, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res)
            const key_data = res.data.data.getClass2byid;

            setFormState({
                ...form_State,
                id:key_data.id,
                subjects:key_data.subjects,
                chapters:key_data.chapters,
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
            {is_Data?<Class2Component
                edit={form_State.edit}
                id={form_State.id}
                subjects={form_State.subjects}
                chapters={form_State.chapters}
            />:""}
        </div>
    )
}

export default Class2Detail;
