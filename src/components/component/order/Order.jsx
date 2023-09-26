import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import './OrderStyle.css'



export const Order = (props) => {
    const {id, price, productImage, productName } = props.data;
    const {cartItems, AddToCart, RemoveToCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cart'>
    <img src= { productImage} alt = ''/>
    <div className='cart_info'>
        <b>{ productName}</b>
        <p>Prive: ${price}</p>

        <div className='cart_regulate'>
          <button onClick = {() => RemoveToCart(id)}>-</button>
          <input 
            className='input'
            value = {cartItems[id]}
            onChange = {e => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick = {() => AddToCart(id)}>+</button>
        </div>
    </div>
</div>
  )
}
