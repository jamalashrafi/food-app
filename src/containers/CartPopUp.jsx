import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
import Modal from '../components/Modal'
import classes from './CartPopUp.module.css';
import { getCartList, subCartList } from '../actions/cartActions';

const CartPopUp = (props) => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartQtyState.cartList);
    const totalAmount = useSelector(state => state.cartQtyState.totalAmount);
    const subCartListFn = recepie => {
        dispatch(subCartList(recepie));
    }
    const renderCartItems = cartList.map((cartItem, index) => <CartItem key={index + cartItem.Price} increaseItemQty={props.increaseItemQty}
        subCartList={subCartListFn} cartitem={cartItem} onClick={props.showCartFn} />);
    useEffect(() => {
        dispatch(getCartList());
    }, [dispatch]);

    return (
        <Modal onClose={props.showCartFn}>
            <div>
                {renderCartItems}
            </div>
            <div className={classes['div-container-amt']}>
                <h3>Total Amount</h3>
                <h3>$ {totalAmount}</h3>
            </div>
            <div className={classes['div-container-btn']}>
                <button onClick={props.showCartFn} className={classes['btn-close']}>Close</button>
                <button >Order</button>
            </div>
        </Modal>
    )
}

export default CartPopUp
