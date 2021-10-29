import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage() {
    const token = localStorage.getItem("token")
    const history = useHistory()

    useEffect(()=>{
        if(token) history.push("/home")
        
    }, [token])

    return (
        <div className="login-page">
            <LoginForm/>
        </div>
    )
}
