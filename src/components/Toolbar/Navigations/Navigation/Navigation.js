import React from 'react'
import classes from '../Navigation/Navigation.module.css'
import {NavLink} from 'react-router-dom'


const Navigation =(props)=>{
return(

    <li className={classes.navigation}>
        <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
            {props.children}
            </NavLink>

    </li>
)
}
export default Navigation