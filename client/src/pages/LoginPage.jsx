import React, {useState} from 'react'
import Form from '../components/Form'

export default function LoginPage() {

    return (
        <div>
            <Form 
                firstInput={"userName"}
                secondInput={"password"}
                buttonText={"login"}
            />
        </div>
    )
}
