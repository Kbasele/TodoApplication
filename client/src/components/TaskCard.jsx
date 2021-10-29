import React, {useState} from 'react'
import Button from './Button'
import DeleteForm from './forms/DeleteForm'
import EditForm from './forms/EditForm'


export default function TaskCard({task}, {key}) {
    const [visible, setVisible] = useState(false)
    const [edit, setEdit] = useState(false)
    const handleOnClick = () =>{
        setVisible(!visible)
        
    }  

    const showEdit = () =>{
        setEdit(!edit)
    }

    return (
        <>
            {!edit?
                <div className="task-card" >
                    <h1 onClick={handleOnClick}>{task.task}</h1>
                    {visible && 
                    <div className={"task-card-content"}>
                        <p>{task.description}</p>
                        <p>{task.date}</p>
                        <div onClick={showEdit}>
                    </div>
                    <div className="taskCard-bottom">
                        <Button text={"edit"} onClick={showEdit} setEdit={setEdit} edit={edit}/>
                        <DeleteForm task={task}/>
                    </div>
                </div>
            }
                </div>
                
                : <EditForm fetch="edit" edit={edit} task={task} setEdit={setEdit}/>
            }
            
        </>
    )
}
