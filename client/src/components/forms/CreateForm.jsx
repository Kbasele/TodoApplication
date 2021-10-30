import React, {useState, useContext} from 'react'
import FetchKit from '../../utils/fetchKit'
import Button from '../buttons/Button'
import Input from '../Input'
import { UserContext } from '../../contexts/userContext'


export default function CreateForm() {
    const {getUserData} = useContext(UserContext)
    

    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    })

    const createOnSubmit = async (e) =>{
        e.preventDefault()
        const newTask = await FetchKit.createTasksFetch(formData)
        if(newTask.ok) getUserData()
    }
    
    return (
        <form className="inputForm" onSubmit={createOnSubmit}>
            <Input 
                formData={formData} 
                setFormData={setFormData} 
                name="task" 
                placeHolder={"start typing..."}
            />

            <Input 
                formData={formData} 
                setFormData={setFormData} 
                name="description" 
                placeHolder={"description"}
                type="text"
            />

            <Button text={"add"}/>
        </form>
    )
}
