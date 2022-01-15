import React,{useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomerListContext } from '../App'
import { Colors } from '../global/constants'
import { ButtonStyled } from '../styles/ButtonStyled'
import { FormStyled } from '../styles/FormStyled'

export default function CustomerDetail() {
    const {customerList,fetchData}=useContext(CustomerListContext)
    const params=useParams()
    const index=params.index
    const customer=customerList[index]
    const {name,vatNr,reference,paymentTerm,email,website,phoneNumber,id}=customer
    const navigate=useNavigate()

    function deleteCustomer(){
      
        console.log(id)
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
        const token = localStorage.getItem("examination1");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        fetch(url, {
          headers: headers,
          method: "DELETE"
        })
        .then(res=>{
          fetchData()})

          navigate("/home")

    }
    return (
        <FormStyled>
            {customer&&
              <>
              <h2>Name: {name}</h2>
              <p>id:{id}</p>
              <p>VatNr: {vatNr}</p>
              <p>Reference: {reference}</p>
              <p>PaymenTerm: {paymentTerm}</p>
              <p>Email: {email}</p>
              <p>Website: {website}</p>
              <p>PhoneNumber: {phoneNumber}</p>
              <ButtonStyled onClick={deleteCustomer} bg={Colors.purple} color={Colors.green}>Delete</ButtonStyled>
              </>
            }
        </FormStyled>
    )
}
