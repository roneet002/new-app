import React from 'react'
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant'
import classes from '../Burger/Burger.module.css'

const Burger = (props) => {

    let transformedIngredient = Object.keys(props.ingredient).map(igkey => {
        return [...Array(props.ingredient[igkey])].map((_, i) => {
            return <BurgerIngrediant key={igkey + i} type={igkey} />
        })
    }).reduce((arr, el) => {
        return (arr.concat(el))
    }, [])

    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>please start adding ingredient</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top" />
            {transformedIngredient}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    )

}
export default Burger