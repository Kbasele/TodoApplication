import React ,{useEffect, useState}from 'react'
import { Route } from 'react-router'
import { useHistory,Redirect } from 'react-router-dom'
import FetchKit from '../utils/fetchKit'
import {Puff} from 'react-loading-icons'


export default function ProtectedRoute(component) {
    const token = localStorage.getItem("token");
    const [verified, setVerified] = useState();
    const history = useHistory();

    useEffect(()=>{
        validateToken(token);
    },[token])

    const validateToken = async (token) => {
        const data = await FetchKit.verifyTokenAuth(token)
        if(data.ok){
            setVerified(true)
        }
        else {
            localStorage.clear();
            history.push("/")
        }
    }   
    
    
    if(verified){return (
        <Route {...component}/>
        )}
        else{
            return  <div class="loading"><Puff stroke="#000000" className="loading" /></div>
        }

}
