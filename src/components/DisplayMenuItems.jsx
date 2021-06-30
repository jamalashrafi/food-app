import React from 'react'
import menuItem from './DisplayMenuItems.module.css';

const DisplayMenuItems = (props) => {
    const increaseQty = (e) => {
        props.increaseItemQty(props.menu);
    }
    return (
        <div className={menuItem['style-menu-items']}>
            <div>
                <p className={menuItem['style-menu-name']}>{props.menu.Name}</p>
                <p className={menuItem['style-menu-description']}>{props.menu.Description}</p>
                <p className={menuItem['style-menu-price']}>$ {props.menu.Price}</p>
            </div>
            <div>
                <div>
                    Amount    <span className={menuItem['style-menu-amount']}>{props.menu.qty}</span>
                </div>
                <button onClick={increaseQty}>+ Add</button>
            </div>
        </div>
    )
}

export default DisplayMenuItems
