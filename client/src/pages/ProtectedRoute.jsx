import React from 'react'
import { Route } from 'react-router'
import {Redirect } from 'react-router-dom'

import decode from 'jwt-decode' 


export default function ProtectedRoute(component) {
    const token = localStorage.getItem("token")

    const validateToken = () => {
            try{
                const verified = decode(token)
                if(verified){
                    return true
                }
            } 
            catch (e){
                localStorage.clear()
                return false   
            }
    }   

    return (
        <>
            {validateToken()?
            <Route {...component} /> 
            :
            <Redirect to={{pathname: "/"}}/> 
            }          
        </>
        )

}
