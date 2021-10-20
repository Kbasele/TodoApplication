import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../contexts/userContext'


export default function Button({text, click, setEdit, edit}) {

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
    const showEdit = () =>{
        setEdit(!edit)
    }

    if(text==="logout"){
        return (
            <button  className="logout"onClick={logOutOnClick}>
                {text}
            </button>
        )

    }
    if(text==="edit"){
        return (
            <button  className="logout"onClick={setEdit}>
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
