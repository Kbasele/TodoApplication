import React, {useEffect, useState} from 'react'
import {Puff} from 'react-loading-icons'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import CreateForm from '../components/forms/CreateForm'
import FetchKit from '../utils/fetchKit'

export default function HomePage() {
    const [user, setUser] = useState()

    useEffect(()=>{
        !user&&getUserData()

    }, [user])

    const getUserData = async () =>{
        const res = await FetchKit.getUserFetch();
        const data = await res.json();
        setUser(data);
    }

    return (
        <>
            {!user ? <Puff stroke="#000000" className="loading" />: 
            (<>
                <Header user={user}/>
                <CreateForm fetch="create"/>
                <div className="hompage-content">
                    {user.tasks.map((task, key) =>{
                        return <TaskCard  task={task} key={key}/>
                            })}
                    
                </div>
            </>)
            }
        </>
    )
}
