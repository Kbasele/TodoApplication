import React, {useContext} from 'react'
import FetchKit from '../../utils/fetchKit'
import { UserContext } from '../../contexts/userContext'
import Button from '../Button'


export default function DeleteForm({task}) {

    const {getUserData} = useContext(UserContext)


    const deleteOnSubmit = async (e) =>{
        e.preventDefault()
        const deletTask = await FetchKit.deleteTaskFetch(task._id)
        if(deletTask.ok){
            getUserData()
        }
    }

    return(
        <form onSubmit={deleteOnSubmit}>
            <Button text={"delete"}/>
        </form>

        )
}
