import React from "react"
import { NavLink , Link, useNavigate } from "react-router-dom"
import css from './Nav.module.css';

const Navbar = () => {
    return (
        <nav className={css.navbarContainer}>
            <NavLink className={css.link} to={"/"}
                style={(props) => ({color: props.isActive ? '#2760c5' : '#565555' ,
                transform: props.isActive ? 'scale(1.2)' : 'scale(1)'})}>
                Todo List
            </NavLink>
            <NavLink className={css.link} to={"/users"}
                style={(props) => ({color: props.isActive ? '#2760c5' : '#565555' ,
                transform: props.isActive ? 'scale(1.2)' : 'scale(1)'})}>
                Users
            </NavLink>
            <NavLink className={css.link} to={"/create-user"}
                style={(props) => ({color: props.isActive ? '#2760c5' : '#565555' ,
                transform: props.isActive ? 'scale(1.2)' : 'scale(1)'})}>
                Create User
            </NavLink>
        </nav>
    )
}

export default Navbar
