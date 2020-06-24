import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControl/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../../src/axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import Wrapcomponent from '../../hoc/withErorHandling/withErorHandling'
import {connect} from 'react-redux'
import * as burgerBuilderAction from '../../store/actions/index'


class BurgerBuilders extends Component {
    // constructor(props){
    //     super(props)

    // }
    state = {
        purchasing: false,
        loading: false,
        error: false

    }

    // addingredientHandler = (type) => {
    //     const oldingredient = this.state.ingredient[type]
    //     const updateingredient = oldingredient + 1
    //     const updateingredientType = { ...this.state.ingredient }
    //     updateingredientType[type] = updateingredient
    //     // const priceold = INGREDIENT_PRICE[type]
    //     const priceAddition = this.state.totalPrice;
    //     // const updatePrice = priceold + priceAddition
    //     this.setState({
    //         ingredient: updateingredientType,
    //         totalPrice: updatePrice
    //     })
    //     this.updatePurchasable(updateingredientType)
    // }
    // removeingredientHandler = (type) => {
    //     const oldingredient = this.state.ingredient[type]
    //     if (oldingredient <= 0) {
    //         return
    //     }
    //     const updateingredient = oldingredient - 1
    //     const updateingredientType = { ...this.state.ingredient }
    //     updateingredientType[type] = updateingredient
    //     const priceold = INGREDIENT_PRICE[type]
    //     const pricededuction = this.props.price;
    //     const updatePrice = pricededuction - priceold
    //     this.setState({
    //         ingredient: updateingredientType,
    //         totalPrice: updatePrice
    //     })
    //     this.updatePurchasable(updateingredientType)

    // }
    updatePurchasable(ingredient) {

        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum > 0
    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })

    }
    closeHandler = () => { this.setState({ purchasing: false }) }
    ContinueHandlers = () => {
       
        // const queryparam = [];
        // for(let i in this.state.ingredient){
        //     queryparam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]))
        // }
        // queryparam.push('price='+ this.state.totalPrice)
        // const querystring = queryparam.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search : '?' + querystring
        // })
this.props.history.push('/checkout')

    }
    componentDidMount() {
        
        // axios.get('https://react-my-burger-5c5b9.firebaseio.com/ingredient.json')
        //     .then(response => {
        //         this.setState({ ingredient: response.data })
        //     }).catch(error => {
        //         this.setState({ error: true })
        //     })
    }
    render() {
        const disableInfo = { ...this.props.ing }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }


        let orderSummary = null;
        let burger = this.state.error ? <p>this ingredient can not loaded</p> : <Spinner />
        if (this.props.ing) {
            burger = (
                <Auxiliary>
                    <Burger ingredient={this.props.ing} />
                    <BuildControls
                        addingredientHandler={this.props.onIngredientAdded}
                        removeingredientHandler={this.props.onIngredientRemoved}
                        disableInfo={disableInfo}
                        totalPrice={this.props.price}
                        purchasable={this.updatePurchasable(this.props.ing)}
                        ordered={this.purchasingHandler}
                    />
                </Auxiliary>
            )
            orderSummary = <OrderSummary
                ingredient={this.props.ing}
                cancelHandler={this.closeHandler}
                ContinueHandler={this.ContinueHandlers}
                price={this.props.price}
            />;
            if (this.state.loading) {
                orderSummary = <Spinner />
            }

        }

        return (
            <Auxiliary>
                {/* {this.state.purchasing ?  */}
                <Modal
                    show={this.state.purchasing}
                    closeHandler={this.closeHandler}
                >
                    {orderSummary}
                </Modal>
                {/* : null} */}
                {burger}
            </Auxiliary>
        )

    }


}
const mapsStatetoProps = state =>{
    return{
        ing : state.ingredient,
        price :state.totalPrice
    }
}

const mapDispatchtoProps = dispatch =>{
return{
onIngredientAdded : (ingName) => dispatch(burgerBuilderAction.addIngredient(ingName)),
onIngredientRemoved : (ingName) => dispatch(burgerBuilderAction.removeIngredient(ingName))

}

}

export default connect(mapsStatetoProps, mapDispatchtoProps) (Wrapcomponent(BurgerBuilders, axios))