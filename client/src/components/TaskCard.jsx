import React, {useState} from 'react'
import Button from './Button'
import Form from './Form'


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
                        <Form fetch={"delete"} task={task}/>
                    </div>
                </div>
            }
                </div>
                
                : <Form fetch="edit" edit={edit} task={task} setEdit={setEdit}/>
            }
            
        </>
    )
}
