import { GET_CART_QTY, INCREASE_CART_QTY } from '../constants/Cart';

const INITIAL_STATE = {
    cartQty: 0
}

const cartQtyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CART_QTY:
            return { ...state }
        case INCREASE_CART_QTY:
            return { ...state, cartQty: state.cartQty + 1 }

        default:
            return state;
    }


};

export default cartQtyReducer;