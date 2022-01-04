import React,{useState,useEffect} from 'react'
import { AsideStyled } from '../styles/AsideStyled'
import { useContext } from 'react'
import { CustomerListContext } from '../App'


export default function MyAccountInfo() {

    const {myData}=useContext(CustomerListContext)
//     const [myData,setMyData]=useState(null)
//     useEffect(()=>{
//        getUserInfo()
//     },[])//myData in [] will get api infinitly

//     function getUserInfo(){
//     const token=localStorage.getItem("examination1")
//     fetch("https://frebi.willandskill.eu/api/v1/me",{
       
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":`Bearer ${token}`
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>setMyData(data))
//    }

    return (
       
        <AsideStyled>
             {myData&&
           <>
           <p>{myData.firstName} {myData.lastName} is inlogged</p>
           <p>email: {myData.email}</p>
           </>}
        </AsideStyled>
        
    )
}
