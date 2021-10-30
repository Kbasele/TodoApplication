import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'

export default function LogoutButton() {
    const {setUser} = useContext(UserContext)
    const history = useHistory()

    const logOutOnClick = ()=>{
        localStorage.clear();
        setUser()
        history.push("/")
    }

    return (
        <button  className="logout"onClick={logOutOnClick}>
            logout
        </button>
    )
}
