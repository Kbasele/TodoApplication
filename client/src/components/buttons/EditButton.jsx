import React from 'react'

export default function EditButton({setEdit}) {
    
    return (
        <button  className="logout" onClick={setEdit}>
            edit
        </button>
    )
}
