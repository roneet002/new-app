import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'

const CheckoutSummary=(props)=>{
return(
    <div>
        <p>We Hope it tastes well</p>
        <Burger ingredient={props.ingredient} />
        
        <Button clickedBtn={props.cancelBtnHandler} btnType="Danger">Cancel</Button>
        <Button clickedBtn={props.subBtnHandler} btnType="Success">Continue</Button>
    </div>
)
}

export default CheckoutSummary