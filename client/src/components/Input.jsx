import React from 'react'

export default function Input({formData, setFormData, name, defVal, placeHolder, type}) {
    
    const handleOnChange = (e)=>{
        const inputName = e.target.name; 
        const inputValue = e.target.value; 
        setFormData({...formData, [inputName]:inputValue})
    }

    return (
        <input 
            type={type} 
            onChange={handleOnChange}
            placeholder={placeHolder} 
            name={name} 
            defaultValue ={defVal}
            required
        />
        )
}
