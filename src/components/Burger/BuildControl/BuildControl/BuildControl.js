import React from 'react'
import classes from './BuildControl.module.css'
const BuildControl =(props)=>{
return(

    
        <div className={classes.wdth}>
            
        <div>{props.label}</div>
        <button className={classes.controlsBtn} onClick={props.remove} disabled={props.disabledinfos}>Less</button>
        <button className={classes.controlsBtn} onClick={props.added}>More</button>
    </div>
    
)

}
export default BuildControl