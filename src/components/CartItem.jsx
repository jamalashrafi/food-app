import React from 'react';
import classes from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <div className={classes['style-cart-items']}>
            <div className={classes['style-cart-info']}>
                <h3 className={classes['style-menu-name']}>{props.cartitem.Name}</h3>
                <span className={classes['style-price']}>{props.cartitem.Price}</span>
                <span className={classes['style-qty']}>x {props.cartitem.qty}</span>
            </div>
            <div className={classes['style-btn-container']}>
                <button className={`${classes['style-sub-btn']} ${classes['style-btn']}`} onClick={() => props.subCartList(props.cartitem)}>-</button>
                <button className={classes['style-btn']} onClick={() => props.increaseItemQty(props.cartitem)}>+</button>
            </div>
        </div >
    )
}

export default CartItem
