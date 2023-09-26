import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../../products';


export const ShopContext = createContext(null)

let defaultItemsCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultItemsCart)


    const AddToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    const RemoveToCart = (itemId) => {
        setCartItems(prev => ({...prev,[itemId] : prev[itemId] - 1}))
    }

    const updateCartItemCount = (newCount, itemId) => {
        setCartItems(prev => ({...prev, [itemId] : newCount}))
    }

    const getTotalSumCart = () => {
        let totalSum = 0;
        for( const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find(product =>
                    product.id === Number(item))
                    totalSum += cartItems[item] * itemInfo.price
            }
        }
        return totalSum;
    }
  


    

    let constextValue = { cartItems, AddToCart,  RemoveToCart, updateCartItemCount , getTotalSumCart }

    return (
       <ShopContext.Provider value = {constextValue}>
            {props.children}
       </ShopContext.Provider>
    )
}
