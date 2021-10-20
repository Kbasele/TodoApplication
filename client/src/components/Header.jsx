import React, {useEffect, useContext} from 'react'
import { UserContext } from '../contexts/userContext'
import {useHistory} from 'react-router-dom'
import Button from './Button'


export default function Header() {

    const history = useHistory()

    const {user, getUserData, setUser} = useContext(UserContext)

    useEffect(()=>{
        getUserData()

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {user&&
                <div>
                    <h1>TODOODODO</h1>
                    <p>Welcome {user.user}</p>
                </div>
            }
            <Button type="logout" text={"logout"}/>
        </div>
    )
}
