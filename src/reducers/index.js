import { combineReducers } from 'redux';
import cartQtyReducer from './cartQty';
import menuListReducer from './menuList';

const store = combineReducers(
    {
        cartQtyState: cartQtyReducer,
        menuListReducer
    }
);

export default store;