import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from '../styles/NavbarStyled'

export default function Navigation() {
    return (
    
        <NavbarStyled>
            <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
      </NavbarStyled>
    )
}
