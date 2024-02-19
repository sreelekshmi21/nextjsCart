'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementFromCart } from './redux/slice/cartSlice'

export default function AddToCart({product}) {

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  const addToCartHandler = () => {    

    console.log('addToCart',product)

    // const existItem = cartItems.find((x) => x.id === product.id)

    // console.log('addToCart',existItem)

    // dispatch(addToCart({ ...product, qty: 1 }))
    dispatch(addToCart({ ...product }))

    // setCart([...cart,{
    //   pdt_id: product?.id,
    //   qty: 1
    // }])
  }

  const decrementFromCartHandler = (product) =>{
    dispatch(decrementFromCart({product}))
  }

  const item = cartItems?.find(x => x?.id === product?.id)
  

  return (
    <>
    {cartItems?.length > 0 &&  item?.id === product?.id ? 
      <div className="bg-yellow-800 text-xl">
                      <span className="px-3">
                        <button 
                          onClick={() => decrementFromCartHandler(item)}
                          disabled={item?.qty === 1}
                        >-</button></span>
                      <span className="p-5">{item?.qty}</span>
                      <span className="px-3"><button
                        onClick={() => addToCartHandler(item)}
                      >+</button></span>
                      
    </div> : <button className='bg-green-700' onClick={() => addToCartHandler(product)}>ADD TO CART</button>}    
    </>   
  )
}
