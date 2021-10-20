import React, {useState, useContext} from 'react'
import FetchKit from '../utils/fetchKit'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../contexts/userContext'

import Input from './Input'
import Button from './Button'

export default function Form({fetch, task, setEdit, edit}) {
    const [wrongCred, setWrongCred] = useState(false)
    const {getUserData} = useContext(UserContext)

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

    const editOnSubmit = async (e) =>{
        e.preventDefault()
        const editTask = await FetchKit.editTasksFetch(formData, task._id)
        if(editTask.ok){
            setEdit(!edit)
            getUserData()
        }
        console.log(editTask)
    }

    const createOnSubmit = async (e) =>{
        e.preventDefault()
        console.log(formData)
        const newTask =await FetchKit.createTasksFetch(formData)
        if(newTask.ok)  getUserData()
    }

    const deleteOnSubmit = async (e) =>{
        e.preventDefault()
        const deletTask = await FetchKit.deleteTaskFetch(task._id)
        if(deletTask.ok){
            getUserData()
        }
    }



    if(fetch === "login"){
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
    
    if(fetch === "edit"){
        return (
            <form className={"editform"}onSubmit={editOnSubmit}>
                <div className={"inputfield"}>
                    <Input formData={formData} setFormData={setFormData} name="task" defVal={task.task}/>
                    <Input formData={formData} setFormData={setFormData} name="description"  defVal={task.description}/>
                </div>
                <Button text={"save changes"}/>
            </form>

        )
    }

    if(fetch === "create"){
        return (
            <form className="inputForm" onSubmit={createOnSubmit}>
                <Input formData={formData} setFormData={setFormData} name="task" placeHolder={"start typing..."}/>
                <Input formData={formData} setFormData={setFormData} name="description" placeHolder={"description"}/>
                <Button text={"add"}/>
            </form>

        )
    }

    if(fetch === "delete"){
        return(
        <form onSubmit={deleteOnSubmit}>
            <Button text={"delete"}/>
        </form>

        )
    }
}
