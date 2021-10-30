import React, {useState, useContext} from 'react'
import FetchKit from '../../utils/fetchKit'
import Input from '../Input'
import { UserContext } from '../../contexts/userContext'
import SaveButton from '../buttons/SaveButton'



export default function EditForm({task, setEdit, edit}) {
    
    const {getUserData} = useContext(UserContext)
    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    })
    
    const editOnSubmit = async (e) =>{
        e.preventDefault()
        const editTask = await FetchKit.editTasksFetch(formData, task._id)
        if(editTask.ok){
            setEdit(!edit)
            getUserData()
        }
    }
    
    return (
        <form className={"editform"}onSubmit={editOnSubmit}>
            <div className={"inputfield"}>
                <Input formData={formData} 
                    setFormData={setFormData} 
                    name="task" 
                    defVal={task.task}
                />
                <Input formData={formData}
                    setFormData={setFormData} 
                    name="description"  
                    defVal={task.description}
                />
            </div>
            <SaveButton/>
        </form>

    )
}
