import react, {useState, useContext} from 'react'
import FetchKit from '../utils/fetchKit'
import { UserContext } from '../contexts/userContext';
import {useHistory} from 'react-router-dom'

export default function Form({firstInput, secondInput, buttonText, onSubmit}) {
    const [wrongCred, setWrongCred] = useState(false)

    const history = useHistory()

    const [formData, setFormData] = useState({
        username: "", 
        password: ""
    })

    const handleOnSubmit = async (e) =>{
        e.preventDefault() 

        const data = await FetchKit.loginFetch(formData)
        const token = await data.json()

        if(data.ok){
            localStorage.setItem("token", token)
            history.push("/homepage")
        }
        else{
            setWrongCred(true)
        }
    }

    const handleOnChange = (e)=>{
        const inputName = e.target.name; 
        const inputValue = e.target.value; 
        setFormData({...formData, [inputName]:inputValue})
    }


    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} placeholder={firstInput} name={firstInput}/>
                <input onChange={handleOnChange} placeholder={secondInput} name={secondInput}/>
                <button>{buttonText}</button>
            </form>
            {wrongCred && <p>WRONG PASSWORD OR EMAIL</p>}
        </>
    )
}
