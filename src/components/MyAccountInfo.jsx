import React,{useEffect} from 'react'
import { AsideStyled } from '../styles/AsideStyled'
import { useContext } from 'react'
import { CustomerListContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'



export default function MyAccountInfo() {

const {getUserInfo,myData}=useContext(CustomerListContext)
const navigate=useNavigate()
useEffect(()=>{
     getUserInfo()
    
},[])
function logOut(){
    localStorage.clear()
    navigate("/login")
}
console.log(myData)
    return (
       
        <AsideStyled>
           {myData.email?
           <>
           <p>{myData.firstName} {myData.lastName} is inlogged</p>
           <p>email: {myData.email}</p><button onClick={logOut}>log out</button>
           </>:("")}
           
        </AsideStyled>
        
    )
}
