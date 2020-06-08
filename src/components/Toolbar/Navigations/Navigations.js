import React from 'react'
import Navigation from  '../Navigations/Navigation/Navigation'
import classes from '../Navigations/Navigations.module.css'
const Navigations =(props)=>{
    return(
        <ul className={classes.dp}>
            <Navigation link="/" exact>Burger Builder</Navigation>
            <Navigation active link="/orders">Orders</Navigation>
            
        </ul>
    )
}
export default Navigations
