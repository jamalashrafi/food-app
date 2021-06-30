import React from 'react'
import Cart from '../containers/Cart';
import header from './Header.module.css';
import meals from '../assets/meals.jpg';

const Header = (props) => {
    return (
        <>
            <img src={meals} alt="meals" className={header['img-main']} />
            <div className={header.headerContainer} onClick={props.showCartFn}>
                <div>React Meals</div>
                <Cart />
            </div>
        </>
    )
}

export default Header
