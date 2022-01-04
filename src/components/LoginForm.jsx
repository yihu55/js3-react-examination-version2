import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Colors, RootURL } from '../global/constants'
import { renderInput } from '../renderInput/renderInput'
import { ButtonStyled } from '../styles/ButtonStyled'
import {FormStyled} from '../styles/FormStyled'
import Heading from './Heading'


export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    function handleOnSubit(e){
        e.preventDefault()
        const url=`${RootURL}api-token-auth/`
        const payload={email,password}
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>{
            const token=data.token
            localStorage.setItem("examination1",token)
            console.log(token)
        })
        
        navigate("/home")

    }
    return (
       
        <FormStyled margin="20px">
        <Heading heading="Login"/>
           {renderInput("email","Email",email,setEmail)}
           {renderInput("password","Password",password,setPassword)}
           <ButtonStyled bg={Colors.purple} color={Colors.white} type="submit" onClick={handleOnSubit}>Login</ButtonStyled>
        </FormStyled>
       
    )
}
