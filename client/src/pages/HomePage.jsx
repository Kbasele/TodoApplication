import React, {useEffect, useState, useContext} from 'react'
import {Puff} from 'react-loading-icons'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import CreateForm from '../components/forms/CreateForm'
import { UserContext } from '../contexts/userContext'

export default function HomePage() {
    const {getUserData, user} = useContext(UserContext)
    const [closeAll, setCloseAll] = useState(false)

    useEffect(()=>{
        !user&&getUserData()

    }, [user, closeAll, getUserData])

    return (
        <>
            {!user ? <Puff stroke="#000000" className="loading" />: 
            (<>
                <Header user={user}/>
                <CreateForm fetch="create"/>
                <div className="hompage-content">
                    {user.tasks.map((task, key) =>{
                        return <TaskCard  task={task} key={key} setCloseAll={setCloseAll} closeAll={closeAll}/>
                    })}
                </div>
            </>)
            }
        </>
    )
}
