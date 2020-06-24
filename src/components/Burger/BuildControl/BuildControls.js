import React from 'react'
import classes from  '../BuildControl/BuildControls.module.css'
import BuildControl from  '../BuildControl/BuildControl/BuildControl'

const controls =[
    {label:'Salad', type : 'Salad' },
    {label:'Meat', type : 'Meat' },
    {label:'Cheese', type : 'Cheese' },
    {label:'Bacon', type : 'Bacon' }

]
const BuildControls =(props)=>{
    return(
<div className={classes.BgRow}>
    <div className={classes.price}>Your Total Price is {props.totalPrice}</div>
    
{controls.map((ctrl)=>{
return ( 
    <BuildControl
    key={ctrl.label}
    label={ctrl.type}
    added ={()=>{props.addingredientHandler(ctrl.type)}}
    remove ={()=>{props.removeingredientHandler(ctrl.type)}}
    disabledinfos={props.disableInfo[ctrl.type]}   
     />
        )

})}
<button
className={classes.OrderButton} 
disabled = {!props.purchasable} 
onClick={props.ordered}>Order</button>

</div>

    )
}

export default BuildControls