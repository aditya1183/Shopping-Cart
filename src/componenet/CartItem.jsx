import React from 'react'
import { usecart } from '../contexts/CartProvider'
import styles from './CartItem.module.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";   

function CartItem({id , img , price ,title , quantity }) {
  const {Increaseqty}=usecart();
  const {Decreaseqty}= usecart();
  const {RemoveItemfromcart}=usecart();
  return (
    <div className={styles.cartitem}>


    {/* left div */}
      <div className={styles.leftDiv}>
        <div className={styles.imageContainer}>
          <img src={img} alt={title}  className={styles.cartimage}/>
        </div>
        <h3>{title}</h3>
      </div>
      {/* Rigth div  */}
      <div className={styles.RightDiv}>
        <div className={styles.RightdivControls}>
        <button
        onClick={()=>{
          if(quantity<=1){
            return ; 
          }
           Decreaseqty(id)}}
        
        ><FaMinus /></button>
        <span className={styles.quantitydisplay}>{quantity}</span>

        <button  onClick={()=> Increaseqty(id)}><FaPlus /></button>
          
        </div>
        <p> &#8377;{price*quantity}</p>
        <button className={styles.removebtn}    onClick={()=> RemoveItemfromcart(id)} ><RxCross1 /></button>
      </div>










      
       
    </div>

  )
}

export default CartItem