import { GET_MENU_ITEMS } from '../constants/Cart';
import { INCREASE_ITEM_QTY, INCREASE_CART_QTY } from '../constants/Cart';

export const getMenuList = () => {

    return { type: GET_MENU_ITEMS }
}

export const increaseItemQtyAction = (name) => (dispatch) => {
    dispatch({ type: INCREASE_ITEM_QTY, payload: name });
    dispatch({ type: INCREASE_CART_QTY });
}