import React from 'react'
import LogoutButton from './buttons/LogoutButton'


export default function Header({user}) {    

    return (
        <div className={"header"}>
            <h1>TODOODODO</h1> 
            <div className={"user"}>
                <p>Welcome {user.user}</p>
                <LogoutButton/>
            </div>
        </div>
    )
}
