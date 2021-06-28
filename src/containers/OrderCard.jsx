import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuList, increaseItemQtyAction } from '../actions/menuActions';
import { getCartQty } from '../actions/cartActions'
import DisplayMenuItems from '../components/DisplayMenuItems';

const OrderCard = () => {
    const menuList = useSelector(state => state.menuListReducer.menuList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenuList());
    }, [dispatch]);

    const increaseItemQty = (name) => {
        dispatch(increaseItemQtyAction(name));
    }

    const renderMenuList = () => {
        let menuListArray = menuList.map((menu, price) => <DisplayMenuItems key={price} menu={menu} increaseItemQty={increaseItemQty} />);
        return menuListArray
    }
    return (
        <div>
            {renderMenuList()}
        </div>
    )
}

export default OrderCard
