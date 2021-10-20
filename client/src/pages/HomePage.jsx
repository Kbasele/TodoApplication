import React, {useEffect, useContext} from 'react'
import { UserContext } from '../contexts/userContext'
import {useHistory} from 'react-router-dom'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import Form from '../components/Form'

export default function HomePage() {
    const history = useHistory()
    const {user, getUserData} = useContext(UserContext)
    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(!token) history.push("/")
        else getUserData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header/>
            {!user ? <p>LOADING</p>: 
            (<>
                <Form fetch="create"/>
                {user.tasks.map((task, key) =>{
                    return <TaskCard  task={task} key={key}/>
                        })}
            </>)
            }
        </div>
    )
}
