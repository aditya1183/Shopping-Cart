import React from 'react'
import { useContext , useReducer , createContext } from 'react'

const CartContext=createContext();

function cartreducer(cart , action){
   if(action.type==="ADD_ITEM"){
        return [... cart , action.payload]
   }
   if(action.type==='INCREASE_QNT'){
      return cart.map(item =>{
        if(item.id===action.payload.id){
          return {...item , quantity:item.quantity+1}
        }
        else{
          return item;
        }
      })
   }
   if(action.type==="DECREASE_QNT"){
    return cart.map(item=>{
      if(item.id===action.payload.id){
        return {...item , quantity:item.quantity-1 }
      }
      else{
        return item;
      }
    })
   }
   if(action.type==='REMOVE_ITEM'){
    return cart.filter(item =>{
      return item.id!=action.payload.id;
    })
   }
    return cart;


}

function CartProvider({children}) {
    const [cart , dispatch]=useReducer(cartreducer , [])
    const Increaseqty=(id)=>{
      dispatch({type:"INCREASE_QNT" , payload:{id:id} })
    }
    const Decreaseqty=(id)=>{
      dispatch({type:"DECREASE_QNT" , payload:{id:id} })
    }

    const RemoveItemfromcart=(id)=>{
      dispatch({type:"REMOVE_ITEM" , payload:{id:id} })

    }
  return (
    <CartContext.Provider value={{cart:cart , dispatch:dispatch , Increaseqty:Increaseqty , 
      Decreaseqty:Decreaseqty , RemoveItemfromcart} }>
      {children}
      </CartContext.Provider>
  )
}


export function usecart(){
     return useContext(CartContext)
}

export default CartProvider