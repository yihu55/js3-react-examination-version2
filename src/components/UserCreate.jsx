import React,{useState} from 'react'
import { RootURL } from '../global/constants'
import { renderInput } from '../renderInput/renderInput'
import { ButtonStyled } from '../styles/ButtonStyled'
import { FormStyled } from '../styles/FormStyled'
import Heading from './Heading'

export default function UserCreate() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [organisationKind,setOrganisationKind]=useState("")
    const [organisationName,setOrganisationName]=useState("")
    const [response,setResponse]=useState("")

    function handleOnCreate(e){
        e.preventDefault()
        const url=`${RootURL}/auth/users/`
        const payload={firstName,lastName,email,password,organisationKind,organisationName}

        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>setResponse(data))


    }
    return (
        <div>
        <FormStyled margin="10px">
            <Heading heading="Create User"/>
            {renderInput("text","firstName",firstName,setFirstName)}
            {renderInput("text","lastName",lastName,setLastName)}
            {renderInput("text","email",email,setEmail)}
            {renderInput("password","Password",password,setPassword)}
            {renderInput("number","organisation kind",organisationKind,setOrganisationKind)}
            {renderInput("text","organisation name",organisationName,setOrganisationName)}
            <ButtonStyled onClick={handleOnCreate}>create user</ButtonStyled>
        </FormStyled>
        {response&&<h2>Tack för registrering</h2>}
        </div>
    )
}
