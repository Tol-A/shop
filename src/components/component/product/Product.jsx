import React, { useContext } from 'react'
import './ProductStyle.css'
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const {id, price, productImage, productName } = props.data;
    const {cartItems, AddToCart} = useContext(ShopContext)
  return (
    <div className='product'>
        <img src= { productImage} alt = ''/>
        <div className='product_info'>
            <p><b>{ productName}</b></p>
            <p>${price}</p>
            <button onClick = {() => AddToCart(id)} className='btn_add'>
              add to cart 
              {cartItems[id] > 0 && <b>({`${cartItems[id]}`})</b>}
            </button>
        </div>
    </div>
  )
}
