import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControl/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../../src/axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import Wrapcomponent from '../../hoc/withErorHandling/withErorHandling'
const INGREDIENT_PRICE = {
    Salad: 1,
    Meat: 2,
    Cheese: 3,
    Bacon: 4
}

class BurgerBuilders extends Component {
    // constructor(props){
    //     super(props)

    // }
    state = {
        ingredient: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false

    }

    addingredientHandler = (type) => {
        const oldingredient = this.state.ingredient[type]
        const updateingredient = oldingredient + 1
        const updateingredientType = { ...this.state.ingredient }
        updateingredientType[type] = updateingredient
        const priceold = INGREDIENT_PRICE[type]
        const priceAddition = this.state.totalPrice;
        const updatePrice = priceold + priceAddition
        this.setState({
            ingredient: updateingredientType,
            totalPrice: updatePrice
        })
        this.updatePurchasable(updateingredientType)
    }
    removeingredientHandler = (type) => {
        const oldingredient = this.state.ingredient[type]
        if (oldingredient <= 0) {
            return
        }
        const updateingredient = oldingredient - 1
        const updateingredientType = { ...this.state.ingredient }
        updateingredientType[type] = updateingredient
        const priceold = INGREDIENT_PRICE[type]
        const pricededuction = this.state.totalPrice;
        const updatePrice = pricededuction - priceold
        this.setState({
            ingredient: updateingredientType,
            totalPrice: updatePrice
        })
        this.updatePurchasable(updateingredientType)

    }
    updatePurchasable(ingredient) {

        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({
            purchasable: sum > 0

        })
    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })

    }
    closeHandler = () => { this.setState({ purchasing: false }) }
    ContinueHandlers = () => {
        this.setState({
            loading: true
        })
        const order = {
            ingredient: this.state.ingredient,
            totalPrice: this.state.totalPrice,
            costomer: {
                name: 'Amit kumar',
                address: {
                    zipcode: '110091',
                    country: 'india',
                    street: 'khichri pur'
                },
                email: 'amit.kumar@clovia.com'
            },
            deliveryMethod: 'Fastest'
        }
        axios.post('/order.json', order)
            .then(response => {
                this.setState({
                    loading: false, purchasing: false
                })
                console.log(response)
            }).catch(error => {
                this.setState({
                    loading: false, purchasing: false
                })
                console.log(error)
            })
    }
    componentDidMount() {
        axios.get('https://react-my-burger-5c5b9.firebaseio.com/ingredient.json')
            .then(response => {
                this.setState({ ingredient: response.data })
            }).catch(error => {
                this.setState({ error: true })
            })
    }
    render() {
        const disableInfo = { ...this.state.ingredient }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }


        let orderSummary = null;
        let burger = this.state.error ? <p>this ingredient can not loaded</p> : <Spinner />
        if (this.state.ingredient) {
            burger = (
                <Auxiliary>
                    <Burger ingredient={this.state.ingredient} />
                    <BuildControls
                        addingredientHandler={this.addingredientHandler}
                        removeingredientHandler={this.removeingredientHandler}
                        disableInfo={disableInfo}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchasingHandler}
                    />
                </Auxiliary>
            )
            orderSummary = <OrderSummary
                ingredient={this.state.ingredient}
                cancelHandler={this.closeHandler}
                ContinueHandler={this.ContinueHandlers}
                price={this.state.totalPrice}
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
export default Wrapcomponent(BurgerBuilders, axios)