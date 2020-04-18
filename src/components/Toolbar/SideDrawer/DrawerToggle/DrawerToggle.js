import React from 'react'
import classes from '../DrawerToggle/DrawerToggle.module.css'
const DrawerToggle =(props)=>{
return(
<div className={classes.drawerToggle} onClick={props.clicked}>
<span></span>
<span></span>
<span></span>
</div>

)

}
export default DrawerToggle