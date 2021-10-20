import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../contexts/userContext'


export default function Button({text, click}) {

    const {setUser} = useContext(UserContext)
    const history = useHistory()


    const logOutOnClick = ()=>{
        localStorage.removeItem("token");
        setUser({
            userName:"", 
            tasks:[]
        })
        history.push("/")
    }

    if(text==="logout"){
        return (
            <button onClick={logOutOnClick}>
                {text}
            </button>
        )

    }
    else{
        return (
            <button onClick={click}>
                {text}
            </button>
        )

    }
}
