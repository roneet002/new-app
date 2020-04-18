import React from 'react'
import classes from '../Navigation/Navigation.module.css'


const Navigation =(props)=>{
return(

    <li className={classes.navigation}>
        <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
            </a>

    </li>
)
}
export default Navigation