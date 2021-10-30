import React, {useContext} from 'react'
import FetchKit from '../../utils/fetchKit'
import { UserContext } from '../../contexts/userContext'
import Button from '../buttons/Button'

export default function DeleteForm({task, setCloseAll}) {
    const {getUserData} = useContext(UserContext)

    
    const deleteOnSubmit = async (e) =>{
        e.preventDefault()
        const deletTask = await FetchKit.deleteTaskFetch(task._id)
        if(deletTask.ok){
            setCloseAll(true)
            getUserData()
        }
    }

    return(
        <form onSubmit={deleteOnSubmit}>
            <Button text={"delete"}/>
        </form>

        )
}
