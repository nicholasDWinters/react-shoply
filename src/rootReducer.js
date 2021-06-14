import data from './data.json';

const INITIAL = { products: data.products, shoppingCart: [], cartTotal: 0.0 }

function rootReducer(state = INITIAL, action) {
    switch (action.type) {

        case "ADD-TO-CART":
            return { ...state, shoppingCart: [...state.shoppingCart, { ...action.product }], cartTotal: state.cartTotal + action.price }

        case "REMOVE-FROM-CART":
            console.log(action.id);
            return { ...state, shoppingCart: state.shoppingCart.filter(item => item.id !== action.id), cartTotal: state.cartTotal - action.price };

        default:
            return state;

    }
}

export default rootReducer;