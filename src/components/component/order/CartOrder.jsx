import React, { useContext } from 'react'
import { Order } from './Order'
import { useNavigate } from 'react-router'
import { PRODUCTS } from '../../../products'
import { ShopContext } from '../../context/ShopContext'
import './OrderStyle.css'

export const CartOrder = () => {
    const {cartItems, getTotalSumCart} = useContext(ShopContext)
    const totalSum = getTotalSumCart()
    const navigate = useNavigate()
  return (
    <div className = 'cartItem'> 
    <h1 style = {{marginTop: '2rem'}}>Your cart </h1>
    <div className = 'carts'>
      {PRODUCTS.map(product => {
         if(cartItems[product.id] !== 0) {
          return <Order
                    data = {product}
                    key = {product.id}
                  />
         }
      }
      )}
    </div>
    {totalSum > 0 ? (
         <>
            <h3>Sub total: $ {totalSum}</h3>
          <div className='checkout'>  
          <button onClick = {() => navigate('/')}>continue shopping</button>
          <button onClick = {() => alert('Your order has been placed !')}>checkout</button>
        </div>
         </>
      ) : (
            <div className='cartEmpty'>
                   <h1>cart is empty</h1>
            </div>
       
      )}
  </div>
  )
}
