import React from 'react'
import { usecart } from '../contexts/CartProvider'
import styles from "../componenet/Product.module.css"

import { toast } from 'react-toastify';
function Product({id , title , price , img}) {
    const {dispatch , cart}= usecart();
    function handleAdd(){
      for(let item of cart){
        if(item.id===id){
          toast.error("Item Already Exit in Cart")
          return;
        }
      }

        const newcartitem={
            id:id,
            price:price,
            title:title,
            img:img,
            quantity:1
        }
        dispatch({type:"ADD_ITEM" ,  payload:newcartitem})
        toast.info("Item Added Sucessfully ...")
    }
  return (
    <div className={styles.Product}>
        
        <img src={img} alt={title} className={styles.ProductImage}/>
        <p className={styles.ProductTitle}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
        <button onClick={handleAdd} className={styles.AddToCartButton}> 
              Add To Cart
              </button>
    </div>
  )
}

export default Product