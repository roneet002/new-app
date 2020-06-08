import * as actionTypes from './actions'


const intialState ={
ingredient: {
    Salad:0,
    Meat: 0,
    Cheese:0,
    Bacon: 0
    },
    totalPrice: 4,
    
    // purchasable

}
const INGREDIENT_PRICE = {
    Salad: 1,
    Meat: 2,
    Cheese: 3,
    Bacon: 4
}

const reducer = (state=intialState, action) =>{
switch(action.type){
    case actionTypes.ADD_INGREDIENT : 
    return{
        ...state,
        ingredient:{
            ...state.ingredient,
            [action.ingredientName] : state.ingredient[action.ingredientName] + 1
        },
        totalPrice : state.totalPrice + INGREDIENT_PRICE[action.ingredientName]

    }
    case actionTypes.REMOVE_INGREDIENT :
        return{
            ...state,
            ingredient:{
                ...state.ingredient,
                [action.ingredientName] : state.ingredient[action.ingredientName] - 1
            },
            totalPrice : state.totalPrice - INGREDIENT_PRICE[action.ingredientName]

        }
     default :
        return state    

}

}

export default reducer