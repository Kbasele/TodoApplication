import React, {useState} from 'react'
import FetchKit from '../../utils/fetchKit'
import Input from '../Input'
import { useHistory } from 'react-router'
import Button from '../buttons/Button'

export default function LoginForm({setNewUser, setCreateUser}) {
    
    const [wrongCred, setWrongCred] = useState(false)
    const history = useHistory()
    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    },)

    const checkCredentials = async (e) =>{
        e.preventDefault() 
        setCreateUser(false)
        setNewUser(false)

        const data = await FetchKit.loginFetch(formData)
        const token = await data.json()
        
        if(data.ok){ 
            localStorage.setItem("token", token)
            history.push("/home")
        }
        else setWrongCred(true)
    }
    
    return (
        <>
            {wrongCred && <p>WRONG PASSWORD OR EMAIL</p>}
            <form className="inputForm" onSubmit={checkCredentials}>
                <Input formData={formData} 
                    setFormData={setFormData} 
                    name="userName" 
                    placeHolder={"username"}
                />
                <Input 
                    formData={formData} 
                    setFormData={setFormData} 
                    name="password" 
                    placeHolder={"password"}
                    type={"password"}
                />
                <Button text={"login"}/>
            </form>
        </>
    )
}
