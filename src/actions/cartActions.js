import {
    GET_CART_QTY, GET_CART_ITEMS, SUB_FROM_CARTLIST,
    DESCREASE_CART_QTY, GET_TOTAL_AMOUNT, SUB_ITEM_QTY
} from '../constants/Cart';

export const getCartQty = () => {

    return { type: GET_CART_QTY }
}
export const getCartList = () => {

    return { type: GET_CART_ITEMS }
}

export const subCartList = (recepie) => dispatch => {
    dispatch({ type: SUB_ITEM_QTY, payload: recepie });
    dispatch({ type: SUB_FROM_CARTLIST, payload: recepie });
    dispatch({ type: DESCREASE_CART_QTY });
    dispatch({ type: GET_TOTAL_AMOUNT });
}