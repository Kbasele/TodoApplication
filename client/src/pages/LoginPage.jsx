import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import CreateUserForm from '../components/forms/CreateUserForm'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage() {
    const token = localStorage.getItem("token")
    const history = useHistory()
    const [createUser, setCreateUser] = useState(false)
    const [newUser, setNewUser] = useState(false)
    
    useEffect(()=>{
        if(token) history.push("/home")
    }, [token,history, createUser ])

    const handleOnClick = () =>{
        setCreateUser(!createUser)
        setNewUser(false)
    }

    return (
        <div className="login-page">
            {newUser&& "Ny användare registrerad!"}
            {!createUser? 
            <>
            <LoginForm setNewUser={setNewUser} setCreateUser={setCreateUser}/>
            </>
            :<CreateUserForm setNewUser={setNewUser} setCreateUser={setCreateUser}/>
            } 
            <p className="create-text" onClick={handleOnClick}>{!createUser?"create user":"back to login"}</p>
        </div>
    )
}
