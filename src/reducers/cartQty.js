import {
    GET_CART_QTY, INCREASE_CART_QTY, GET_CART_ITEMS,
    SUB_FROM_CARTLIST, ADD_TO_CART_LIST, GET_TOTAL_AMOUNT, DESCREASE_CART_QTY
} from '../constants/Cart';

const INITIAL_STATE = {
    cartQty: 0,
    totalAmount: 0,
    cartList: []
}

const cartQtyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CART_QTY:
            return { ...state }
        case INCREASE_CART_QTY:
            return { ...state, cartQty: state.cartQty + 1 }
        case DESCREASE_CART_QTY:
            return { ...state, cartQty: state.cartQty - 1 }
        case ADD_TO_CART_LIST:
            const incomingObject = { ...action.payload };
            // const incomingObject = action.payload;//Not working as this is the same object as used 
            //by the menuList and when that list is updated here also the qty increases automatically due
            //to objects with the same ref. So, we created a new obj from action.payload.
            let isExist = false;
            const tempCartList = state.cartList;
            let updatedCartList = tempCartList.map(itm => {
                if (itm.Name === incomingObject['Name']) {
                    itm.qty = itm.qty + 1;
                    isExist = true;
                }
                return itm;
            })
            if (!isExist)
                updatedCartList.push(incomingObject);

            return { ...state, cartList: updatedCartList }

        case SUB_FROM_CARTLIST:
            const payloadObject = { ...action.payload };
            let modifiedCartList = state.cartList;
            for (let i = 0; i < modifiedCartList.length; i++) {
                if (modifiedCartList[i].Name === payloadObject.Name) {
                    if (modifiedCartList[i].qty > 1) {
                        modifiedCartList[i].qty = modifiedCartList[i].qty - 1;
                    }
                    else
                        modifiedCartList.splice(i, 1);
                }
            }
            return { ...state, cartList: modifiedCartList }

        case GET_CART_ITEMS:
            return { ...state }

        case GET_TOTAL_AMOUNT:
            let TotalAmt = 0;
            for (let i = 0; i < state.cartList.length; i++) {
                TotalAmt = TotalAmt + (state.cartList[i].Price * state.cartList[i].qty)
            }
            return { ...state, totalAmount: TotalAmt };

        default:
            return state;
    }


};

export default cartQtyReducer;