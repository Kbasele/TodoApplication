import React, {useState, useEffect} from 'react'
import FetchKit from '../../utils/fetchKit'
import Button from '../Button'
import Input from '../Input'
import { useHistory } from 'react-router'

export default function LoginForm() {
    const [wrongCred, setWrongCred] = useState(false)
    const [token, setToken] = useState("")
    const history = useHistory()


    useEffect(()=>{
        if(token.length > 0) verifyToken(token) 
    }, [token])

    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    },)


    const checkCredentials = async (e) =>{
        e.preventDefault() 

        const data = await FetchKit.loginFetch(formData)
        const token = await data.json()
        
        if(data.ok) setToken(token)
        else setWrongCred(true)
    }

    const verifyToken = async (token) => {
        const data = await FetchKit.verifyTokenAuth(token)
        if(data.ok){
            console.log("DEN ÄR OK")
            localStorage.setItem("token", token)
            history.push("/home")
        } else{
            console.log("NÄ")
            history.push("/error")
        }
        
    }
    
    return (
        <>
            <form className="inputForm" onSubmit={checkCredentials}>
                <Input formData={formData} setFormData={setFormData} name="userName" placeHolder={"username"}/>
                <Input formData={formData} setFormData={setFormData} name="password" placeHolder={"password"}/>
                <Button text={"login"}/>
            </form>
            {wrongCred && <p>WRONG PASSWORD OR EMAIL</p>}
        </>
    )
}
