import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedoutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to ='/signedup'>SignUp</NavLink></li>
        <li><NavLink to ='/signin'>LogIn</NavLink></li>
        </ul>
    )
}

export default  SignedoutLinks  