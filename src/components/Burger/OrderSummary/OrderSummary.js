import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import classes from '../OrderSummary/OrderSumary.module.css'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
    const ingrediantSummary = Object.keys(props.ingredient).map(igkey => {
        return (<li key={igkey}> <span style={{ textTransform: "uppercase" }}>{igkey}</span> : {props.ingredient[igkey]}</li>)
    })
    return (
        <Auxiliary>
            <div className={classes.txtLeft}>
                <h4>Your Order</h4>
                <p>A Delicious burger with the following ingrediant</p>
                <ul style={{ listStyle: 'none' }}>
                    {ingrediantSummary}
                </ul>
                <p>Total Price : <strong>{props.price}</strong></p>
                <p>Continue to Checkout</p>
            </div>
            <Button clickedBtn={props.cancelHandler} btnType="Danger">Cancel</Button>
            <Button clickedBtn={props.ContinueHandler} btnType="Success">Continue</Button>
        </Auxiliary>
    )


}

export default OrderSummary