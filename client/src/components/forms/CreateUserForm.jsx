import React, {useState} from 'react'
import Input from '../Input'
import Button from '../buttons/Button'
import FetchKit from '../../utils/fetchKit'
export default function CreateUserForm({setNewUser, setCreateUser}) {

    const [exists, setExists] = useState(false)
    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    },)

    const handleOnSubmit = async (e) =>{
        e.preventDefault()
        const res = await FetchKit.createUserFetch(formData)
        if(res.ok){
            setCreateUser(false)
            setNewUser(true)
        }
        else  setExists(true)
    

    }

    return (
        <>
            <form className="inputForm" onSubmit={handleOnSubmit}>
                <Input 
                    formData={formData} 
                    setFormData={setFormData} 
                    name="userName" 
                    placeHolder={"new username"}
                />
                <Input 
                    formData={formData} 
                    setFormData={setFormData} 
                    name="password" 
                    placeHolder={"new password"} 
                    type={"password"}
                />
                <Button text={"signup"}/>
            </form>
            {exists && <p>Username is taken</p>}

        </>
    )
}
