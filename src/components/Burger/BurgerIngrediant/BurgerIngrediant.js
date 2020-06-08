import React, { Component } from 'react'
import classes from '../BurgerIngrediant/BurgerIngrediant.module.css'
import PropTypes from 'prop-types'
class BurgerIngrediant extends Component {
    render() {
        let ingredient = null
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
                break;
            case ('Bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('Meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('Cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('Salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default: ingredient = null
                break


        }
        return ingredient
    }


}
BurgerIngrediant.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngrediant