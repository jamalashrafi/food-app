import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuList } from '../actions/menuActions';
import DisplayMenuItems from '../components/DisplayMenuItems';

const OrderCard = (props) => {
    const menuList = useSelector(state => state.menuListReducer.menuList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenuList());
    }, [dispatch]);

    const renderMenuList = () => {
        let menuListArray = menuList.map((menu, price) => <DisplayMenuItems key={price} menu={menu} increaseItemQty={props.increaseItemQty} />);
        return menuListArray
    }
    return (
        <div>
            {renderMenuList()}
        </div>
    )
}

export default OrderCard
