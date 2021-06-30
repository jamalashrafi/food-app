import { GET_MENU_ITEMS } from '../constants/Cart';
import { INCREASE_ITEM_QTY, INCREASE_CART_QTY, ADD_TO_CART_LIST, GET_TOTAL_AMOUNT } from '../constants/Cart';

export const getMenuList = () => {

    return { type: GET_MENU_ITEMS }
}

export const increaseItemQtyAction = (incrementedObject) => (dispatch) => {
    dispatch({ type: INCREASE_ITEM_QTY, payload: incrementedObject['Name'] });
    dispatch({ type: INCREASE_CART_QTY });
    dispatch({ type: ADD_TO_CART_LIST, payload: incrementedObject });
    dispatch({ type: GET_TOTAL_AMOUNT });
}