import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from './Cart.module.css';
import { getCartQty } from '../actions/cartActions'

const Cart = () => {
    const cartQty = useSelector(state => state.cartQtyState.cartQty);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartQty());
    }, [dispatch]);


    return (
        <div className={cart['cart-container']}>
            <i>Icon</i>
            <span>Your Cart</span>
            <span className={cart['cart-qty']}>{cartQty}</span>
        </div>
    )
}

export default Cart
