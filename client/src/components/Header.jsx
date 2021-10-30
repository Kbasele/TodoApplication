import React from 'react'
import Button from './Button'


export default function Header({user}) {

    return (
        <div className={"header"}>
            <h1>TODOODODO</h1> 
            <div className={"user"}>
                <p>Welcome {user.user}</p>
                <Button type="logout" text={"logout"}/>   
            </div>
        </div>
    )
}
