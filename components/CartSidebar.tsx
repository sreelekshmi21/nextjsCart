'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/slice/cartSlice'

export default function CartSidebar() {

  const {cartItems,itemsPrice} = useSelector(state => state.cart)

  const dispatch = useDispatch()  

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const optionsArr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const addToCartHandler = (product, value) =>{

      // dispatch(removeFromCart(id))
      console.log('#DD',product,value,product.qty + value, product.qty + parseInt(value),
      { ...product, qty: product.qty + parseInt(value), sel: true })

      // dispatch(addToCart({ ...product, qty: product.qty + parseInt(value), sel: true }))
      dispatch(addToCart({ ...product, qty: parseInt(value), sel: true }))
    }


  return (     
        <>
          <div className={`p-2 flex flex-col items-center border-b border-b-gary-600 ${cartItems?.length > 0 ? 'fixed top-0 right-0 w-32 overflow-scroll mt-130' : '' }`}>
            <div>SUBTOTAL</div>
            <div className="font-bold text-white-700 m-5">{cartItems?.length === 0 ? 
            'CART EMPTY' : '$'+itemsPrice}</div>
            <>
              <Link
                href="/cart"
                className="w-full text-center p-1 mb-5 rounded-2xl border-2">
                Go to cart
              </Link>
            </>
            {cartItems?.length > 0 && cartItems?.map((product,ind) => <span key={product?.id}>              
              <Image src={product.image}
                          alt={product.title}
                          width={50}
                          height={50}
                          className="p-1"
                        ></Image>
                <select value={product?.qty}
                  // options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
                  onChange={(e) =>
                    addToCartHandler(product, e.target.value)
                  }
                  className='bg-gray-600'>
                  {optionsArr?.map((option,ind) => <option key={option} value={option}>{option}</option>)}
                  </select>
                        <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(product?.id)}>
                        Delete
                      </button>
              </span>)}
        </div>         
        </>    
  )
}
