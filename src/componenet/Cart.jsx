import React from 'react'
import {usecart} from "../contexts/CartProvider"
import CartItem from './CartItem';
import styles from "./Cart.module.css"

function Cart() {
  
    const {cart}=usecart();
    if(cart.lenght === 0) return <h1>No Item Found ...</h1>
    let TotalAmount=0;
    for(let item of cart){
      TotalAmount+= item.price * item.quantity
    }
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shoping Cart</h2>
   
    <div>

        {
            cart.map(cartItem=> <CartItem key={cartItem.id} {...cartItem}/>)
        }
    </div>
    <h1>Total Amount:  &#8377; {TotalAmount}</h1>
    </div>
  )
}

export default Cart