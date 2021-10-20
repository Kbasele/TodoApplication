import React, {useEffect, useContext} from 'react'
import { UserContext } from '../contexts/userContext'
import Button from './Button'


export default function Header() {

    const {user, getUserData} = useContext(UserContext)

    useEffect(()=>{
        getUserData()

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={"header"}>
            {user&&
                    <h1>TODOODODO</h1>
            }
            <div className={"user"}>
                <p>Welcome {user.user}</p>
                <Button type="logout" text={"logout"}/>   
            </div>
        </div>
    )
}
