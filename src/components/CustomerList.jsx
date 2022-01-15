import React,{useContext,useEffect} from 'react'
import { CustomerListContext } from '../App'
import { ListStyled } from '../styles/ListStyled'
import Heading from './Heading'
import { LinkStyled } from '../styles/LinkStyled'
import { Colors } from '../global/constants'

export default function CustomerList() {
    const {customerList,fetchData}=useContext(CustomerListContext)
    console.log(customerList)
    useEffect(()=>{
        fetchData()
    },[])
   
    return (
        <ListStyled>
           <Heading heading="Customer List"/>
         
           {customerList&&customerList.map((customer,index)=>{
               const {name,id}=customer
               return <div key={id}>
                   <LinkStyled to={`/customer/${index}`} fontSize="true" color={Colors.purple}>
                       <h4>name:{name}</h4>
                    </LinkStyled>
                     </div>

           })}
        </ListStyled>
    )
}
