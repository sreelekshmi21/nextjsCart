'use client';

import React from 'react'
import { useSelector } from 'react-redux';

export default function HeaderCart() {

  const {cartItems,totalQty} = useSelector(state => state.cart)

  return (
   <>
    <span className="cart-badge">{cartItems?.length === 0 ? 0 : totalQty}</span>
   </>
  )
}
