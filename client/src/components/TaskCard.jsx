import React, {useEffect, useState} from 'react'
import EditButton from './buttons/EditButton'
import DeleteForm from './forms/DeleteForm'
import EditForm from './forms/EditForm'


export default function TaskCard({task, setCloseAll,closeAll }) {
    const [visible, setVisible] = useState(false)
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        if(closeAll){
            setEdit(false)
            setCloseAll(false)
        }
    },[edit, setCloseAll, closeAll])

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
                            <EditButton onClick={showEdit} setEdit={setEdit}/>
                            <DeleteForm task={task} setCloseAll={setCloseAll}/>
                        </div>
                    </div>
                    }
                </div>
                :<EditForm 
                    fetch="edit" 
                    edit={edit} task={task} setEdit={setEdit}
                    />
            }
            
        </>
    )
}
