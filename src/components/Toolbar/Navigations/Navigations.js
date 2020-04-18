import React from 'react'
import Navigation from  '../Navigations/Navigation/Navigation'
import classes from '../Navigations/Navigations.module.css'
const Navigations =(props)=>{
    return(
        <ul className={classes.dp}>
            <Navigation active link="/">Checkout</Navigation>
            <Navigation link="/cart">cart</Navigation>
        </ul>
    )
}
export default Navigations
