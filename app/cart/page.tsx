'use client';

import CheckoutCard from '@/components/CheckoutCard';
import { addToCart, decrementFromCart, removeFromCart } from '@/components/redux/slice/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {

    const {cartItems} = useSelector(state => state.cart)

    const dispatch = useDispatch()  
    
    const router = useRouter()

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const decrementFromCartHandler = (product,index) =>{
      dispatch(decrementFromCart({product,index}))
    }

    
  const addToCartHandler = (product) => {    

    // console.log('addToCart',product)

    // const existItem = cartItems.find((x) => x.id === product.id)

    // console.log('addToCart',existItem)

    // =====dispatch(addToCart({ ...item, qty: 1 }))
    dispatch(addToCart({ ...product }))
    // setCart([...cart,{
    //   pdt_id: product?.id,
    //   qty: 1
    // }])
  }

  return (
    <>
     <div>
        {cartItems?.length === 0 ? <h3>Cart is EMPTY</h3> : 
          <div className="grid md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full">
                <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Product</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Unit Price</th>
                  <th className="p-5 text-right">Items Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product,index) => (
                  <tr key={product.id} className="border-b">
                    <td>
                    <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                          className="p-1"
                        ></Image>
                        {product.title}
                    </td>
                    <td>
                      <>
                      <span className="px-3">
                        <button 
                          onClick={() => decrementFromCartHandler(product,index)}
                          disabled={product?.qty === 1}
                        >-</button></span>
                      <span className="p-5">{product?.qty}</span>
                      <span className="px-3"><button
                        onClick={() => addToCartHandler(product)}
                      >+</button></span>
                      </>
                    </td>
                    <td className="p-5 text-right">${product.price}</td>
                    <td className="p-5 text-right">${product?.qty * product.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
                </table>
            </div>            
          </div>  
        }
        <CheckoutCard />
     </div>
    </>
  )
}
