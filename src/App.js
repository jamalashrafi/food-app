import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increaseItemQtyAction } from './actions/menuActions';
import './App.css';
import Header from './components/Header';
import DisplayCard from './components/DisplayCard';
import appCss from './App.module.css'
import OrderCard from './containers/OrderCard';
import CartPopUp from './containers/CartPopUp';

function App() {
  const [showCart, setShowCart] = useState(!true);
  const dispatch = useDispatch();
  const showCartFn = () => {
    setShowCart(setShowCart => !setShowCart);
  }
  const increaseItemQty = (incrementedObject) => {
    dispatch(increaseItemQtyAction(incrementedObject));
  }
  return (
    <>
      <Header showCartFn={showCartFn} />
      {showCart ? <CartPopUp showCartFn={showCartFn} increaseItemQty={increaseItemQty} /> : ''}
      <DisplayCard styleCard={appCss['styleCard']}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>Choose your favorite food from our broadn selection of available meals and enjoy a delicious
        or Dinner at home.</p>
        <p>All meals are cooked with high quality ingredients, just-in-time and of-course by experinced chefs.</p>
      </DisplayCard>
      <DisplayCard styleCard={appCss['menu-card']}>
        <OrderCard increaseItemQty={increaseItemQty} />
      </DisplayCard>
    </>
  );
}

export default App;
