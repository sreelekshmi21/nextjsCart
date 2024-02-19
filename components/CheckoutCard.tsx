"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CheckoutCard() {
    
    const router = useRouter()

    const pathname = usePathname()

    const {cartItems,itemsPrice,shippingPrice,totalPrice} = useSelector(state => state.cart)
    
    return (
    <>
      {cartItems?.length !== 0  && <div className="card p-5">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    Price Details ({cartItems.reduce((acc, curr) => acc + curr.qty, 0)}) Items
                  </div>
                </li>
                <li>
                  <div className="pb-3 text-xl">
                    Total MRP <span></span>${itemsPrice}
                  </div>
                </li>
                <li>
                  <div className="pb-3 text-xl">
                    Shipping Price <span></span>${shippingPrice === 0 ? 'FREE' : shippingPrice}
                  </div>
                </li>
                <li>
                  <div className="pb-3 text-xl">
                    Total Amount <span></span>${totalPrice}
                  </div>
                </li>
                <li>
                  {pathname === '/cart' && <button
                    onClick={() => router.push('/shipping')}
                    className="primary-button w-full"
                  >
                    Proceed to CheckOut
                  </button>}
                </li>
              </ul>
            </div>
          }
    </>
  )
}
