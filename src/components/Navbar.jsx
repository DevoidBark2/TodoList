import React from "react";
import {NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-link">
                <NavLink className="link-item" to='/main'>Главная</NavLink>
                <NavLink className="link-item" to='bgwindow'>Описание</NavLink>
            </div>
        </div>
    )
}

export default Navbar;