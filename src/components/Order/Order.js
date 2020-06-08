import React from 'react'
import classes from '../Order/Order.module.css'

const Orders = (props)=>{
    const ingredient = []
    for(let ingredientName in props.ingredient){
        ingredient.push({
            name:ingredientName,
            amount:props.ingredient[ingredientName]
        })
    }
    const ingredientOutpurt = ingredient.map(ig=>{
    return( <span className={classes.ingbox} key={ig.name}>{ig.name} {ig.amount}</span>)
        
    })
return(
<div className={classes.box}>
<div className={classes.pr}><strong>Ingredients</strong>
{ingredientOutpurt}
</div>
<div className={classes.pr}><strong>Price</strong>
&#8377; {props.price}</div>

</div>

)


}

export default Orders