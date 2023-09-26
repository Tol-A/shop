import React from 'react'
import { PRODUCTS } from '../../../products'
import './ProductStyle.css'
import { Product } from './Product'

export const Products = () => {
  return (
    <div className = 'home'> 
    <h1>Shop Valdemara Kotova</h1>
    <div className = 'products'>
      {PRODUCTS.map(product =>
        <Product
          data = {product}
          key = {product.id}
        />
      )}
    </div>
  </div>
  )
}
