import React,{useState} from 'react'
import Heading from './Heading'
import { FormStyled } from '../styles/FormStyled'
import { Colors } from '../global/constants'
import { renderInput } from '../renderInput/renderInput'
import { ButtonStyled } from '../styles/ButtonStyled'
import { CustomerListContext } from '../App'
import { useContext } from 'react'
export default function AddCustomer() {
    const {setCustomerList,fetchData}=useContext(CustomerListContext)

    const [name,setName]=useState("")
    const [organisationNr,setOrganisationNr]=useState("")
    const [vatNr,setVatNr]=useState("")
    const [reference,setReference]=useState("")
    const [paymentTerm,setPaymentTerm]=useState("")
    const [website,setWebsite]=useState("")
    const [email,setEmail]=useState("user@example.com")
    const [phoneNumber,setPhoneNumber]=useState("")

    function addCustomer(){
       
        const vatNrStart=vatNr.slice(0,2)
        const vatNrefter=vatNr.slice(2)

        if(vatNrStart!=="SE"||vatNrefter.length!==10){
            alert("Please input SExxx(10 number)!")
        }
        if(isNaN(paymentTerm)||paymentTerm===""){
            alert("Please input a number in paymentTerm!")
        }
        const url="https://frebi.willandskill.eu/api/v1/customers/"
        const token=localStorage.getItem("examination1")
        const payload={name,organisationNr,vatNr,reference,paymentTerm,website,email,phoneNumber}
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`

            },
            body: JSON.stringify(payload),
        })
        .then(res => res.json())
        .then(data =>{
            setCustomerList(data.result)
            fetchData()})
           
    }


    return (
        <FormStyled margin="10px;">
        <Heading heading="Add customer"/>
        {renderInput("text","NAME",name,setName)}
            {renderInput("text","ORGANISATION NUMBER",organisationNr,setOrganisationNr)}
            {renderInput("text","VAT NUMBER t.ex SE follow by 10 numbers",vatNr,setVatNr)}
            {renderInput("text","REFERENCE",reference,setReference)}
            {renderInput("number","PAYMENT TERM",paymentTerm,setPaymentTerm)}
            {renderInput("text","WEBSITE",website,setWebsite)}
            {renderInput("email","EMAIL",email,setEmail)}
            {renderInput("tel","PHONE NUMBER",phoneNumber,setPhoneNumber)}
            <ButtonStyled bg={Colors.purple} color={Colors.white} type="submit" onClick={addCustomer}>add customer</ButtonStyled>
        </FormStyled>
    )
}
