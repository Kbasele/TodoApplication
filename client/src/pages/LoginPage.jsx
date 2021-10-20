import React, {useEffect} from 'react'
import Form from '../components/Form'
import {useHistory} from 'react-router-dom'

export default function LoginPage() {
    const token = localStorage.getItem("token")
    const history = useHistory()

    useEffect(()=>{
        if(token) history.push("/home")
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="login-page">
            <Form fetch="login"/>
        </div>
    )
}
