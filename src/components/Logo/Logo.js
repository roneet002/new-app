import React from 'react'
import LogoImg from '../../assets/images/logo.png'
import classes from '../../components/Logo/Logo.module.css'
const Logo =()=>{

    return(
        <img src={LogoImg} className={classes.logo} alt="Logo" />
    )
}
export default Logo