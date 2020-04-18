import React from 'react'
import Logo from '../../Logo/Logo'
import Navigations from '../Navigations/Navigations'
import classes from  '../SideDrawer/SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const SideDrawer =(props)=>{
let attachedClass = [classes.SideDrawer, classes.close]
if(props.open){
attachedClass =[classes.SideDrawer, classes.open]

}
    return(
    <Auxiliary>    
        <div className={classes.hideDesktop}>
        <Backdrop show={props.open} clicked={props.hideBackdropHandler} />
        <div className={attachedClass.join(' ')}>
    <div style={{height:'40px'}}><Logo /></div>
    <nav>
        <Navigations/>
    </nav>
    
    </div>
    </div>   
    </Auxiliary>

    )
}

export default SideDrawer