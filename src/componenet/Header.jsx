import React, { useEffect } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import { useState } from 'react'
import styles from "./UI/Header.module.css"
import Container from './UI/Container'
import { FaShoppingCart } from "react-icons/fa";
import { usecart } from '../contexts/CartProvider'


function Header() {
  const {cart} =usecart();
  let Totalquantity=0;
  for(let item of cart){
    Totalquantity+=item.quantity;
  }
  const [isModle , setidModle]=useState(false);
  function closedModle(){
    setidModle(false);

  }
  useEffect(()=>{
    if(isModle){
      document.documentElement.style.overflowY="hidden";
    }
    else{
      document.documentElement.style.overflowY="scroll";

    }
  } , [isModle])
  return (
   <header className={styles.header}>
    <Container >
    <nav className={styles.nav}>
        <h1 className='logo'>Shoping Cart</h1>
        <button  className={styles.showcartButton} onClick={()=>setidModle(true)}
          >
          <span className={styles.carticonandnumber}>
          <FaShoppingCart />
          {Totalquantity >0 && 
          <span className={styles.cartnumber}>{Totalquantity}</span>
          }
          

          </span>
          <span>Cart</span>
          </button>
    </nav>
    </Container>
    {(isModle && <Modal closedModle={closedModle}>
      <Cart/>
    </Modal>) }
    
   </header>
  )
}

export default Header