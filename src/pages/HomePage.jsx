import React from 'react'
import AddCustomer from '../components/AddCustomer'
import CustomerList from '../components/CustomerList'
import MyAccountInfo from '../components/MyAccountInfo'
import { MainStyled } from '../styles/MainStyled'


export default function HomePage() {
    return (
        <div>
        {/* <MyAccountInfo/> */}
        <MainStyled display="true">
            <CustomerList />
            <AddCustomer/>
        </MainStyled>
        </div>
    )
}
