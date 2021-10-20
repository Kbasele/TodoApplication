import React, {useState,useContext} from 'react'
import Button from './Button'
import FetchKit from '../utils/fetchKit'
import { UserContext } from '../contexts/userContext'
import Form from './Form'


export default function TaskCard({task}, {key}) {
    const { getUserData} = useContext(UserContext)

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
                <div>
                    <h1 onClick={handleOnClick}>{task.task}</h1>
                    {visible && 
                    <div>
                        <p>{task.description}</p>
                        <p>{task.date}</p>
                        <div onClick={showEdit}><Button text={"edit"}/>
                    </div>
                    <Form fetch={"delete"} task={task}/>
                </div>
            }
                </div>
                
                : <Form fetch="edit" edit={edit} task={task} setEdit={setEdit}/>
            }
            
        </>
    )
}
