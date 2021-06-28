import { GET_MENU_ITEMS } from '../constants/Cart';
import { INCREASE_ITEM_QTY } from '../constants/Cart';

const INITIAL_STATE = {
    menuList: [{
        Name: 'Sushi',
        Description: 'Finest fish and veggies',
        Price: `$22.99`,
        qty: 0
    }, {
        Name: 'Schnitzel',
        Description: 'A german speciality',
        Price: `16.50`,
        qty: 0
    }, {
        Name: 'Barbecue Burger',
        Description: 'Barbecue Burger',
        Price: `35.99`,
        qty: 0
    }]
}

const menuListReducer = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case GET_MENU_ITEMS:
            return { ...state }
        case INCREASE_ITEM_QTY:
            const name = action.payload;
            const newList = state.menuList.map(menu => {
                if (menu.Name === name)
                    menu.qty = menu.qty + 1;
                return menu;
            });
            return { ...state, menuList: newList };
        default:
            return state;
    }


};

export default menuListReducer;