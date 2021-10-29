import React, {useState} from 'react'
import FetchKit from '../../utils/fetchKit'
import Button from '../Button'
import Input from '../Input'
import { useHistory } from 'react-router'

export default function LoginForm() {
    const [wrongCred, setWrongCred] = useState(false)
    const history = useHistory()

    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    })

    const loginOnSubmit = async (e) =>{
        e.preventDefault() 

        const data = await FetchKit.loginFetch(formData)
        const token = await data.json()

        if(data.ok){
            localStorage.setItem("token", token)
            history.push("/home")
        }
        else{
            setWrongCred(true)
        }
    }
    
    return (
        <>
            <form className="inputForm" onSubmit={loginOnSubmit}>
                <Input formData={formData} setFormData={setFormData} name="userName" placeHolder={"username"}/>
                <Input formData={formData} setFormData={setFormData} name="password" placeHolder={"password"}/>
                <Button text={"login"}/>
            </form>
            {wrongCred && <p>WRONG PASSWORD OR EMAIL</p>}
        </>
    )
}
