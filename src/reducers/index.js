import { combineReducers } from 'redux';
import checkoutPrice from './checkoutPrice';

const store = combineReducers(
    {
        checkoutPrice
    }
);

export default store;