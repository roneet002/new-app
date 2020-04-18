import React from 'react'
import Logo from '../Logo/Logo'
import classes from '../../components/Toolbar/Header.module.css'
import Navigations from './Navigations/Navigations'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'


const Header =(props)=>{

    return(
        <header>
            
<DrawerToggle clicked={props.DrawerToggleHandler} />
    <Logo />
    <nav className={classes.NavHide}>
    <Navigations />
    </nav>
        </header>
    )
}

export default Header