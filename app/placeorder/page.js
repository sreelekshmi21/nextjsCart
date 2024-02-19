"use client";

// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutStepper from '@/components/CheckoutStepper';

export default function PlaceOrder() { 
  
  
  const {cartItems,itemsPrice,shippingPrice,totalPrice,shippingAddress,paymentMethod} = useSelector(state => state.cart) 
  

  return (
    <>
      <CheckoutStepper activeStep={2}/>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty
        </div>) : (<div class="grid grid-flow-col gap-3">
             <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Order Summary</h5>      
                 </div>
                <div class="flow-root">
                     <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center">                  
                            <div class="flex min-w-0 ms-4">
                              <p class="text-sm font-medium text-gray-900 dark:text-white">
                                     Shipping Address
                              </p>                        
                           </div>
                           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                 {shippingAddress.fullName}, {' '}
                                {shippingAddress.city}, {shippingAddress.state}, 
                             {shippingAddress.country}, {' '}
                           {shippingAddress.postalCode}
                          </div>
                    {/* <p>
                    <Link className="default-button inline-block" href="/shipping">
                  Edit
                </Link>
                    </p> */}
                    {/* <li class="py-3 sm:py-4"> */}
                    <div class="inline-flex items-center text-base font-semibold text-gray-900   dark:text-white px-4">
                      <Link href='/shipping'
                            className="px-3"
                            style={{
                              textDecoration: 'none',
                              color: 'red',
                              fontSize: 14,
                              fontStyle: 'italic'                            
                            }}>
                               Edit
                      </Link>        
                    </div>
                  </div>                
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">                    
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Payment Method
                        </p>                        
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {paymentMethod}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white px-4">
                        <Link href='/payment'
                            className="px-3"
                                style={{
                                  textDecoration: 'none',
                                  color: 'red',
                                  fontSize: 14,
                                  fontStyle: 'italic',
                                
                                }}>
                                    Edit
                        </Link>        
                  </div>
                  </div>
            </li>          
        </ul>
   </div>
</div>
<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4"></div>
    <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">                  
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Items Price
                        </p>                        
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${itemsPrice}</div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">                    
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Shipping
                        </p>                        
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${shippingPrice}</div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">                    
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Total Price
                        </p>                        
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${totalPrice}</div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => alert('Order done')}>Confirm Order</button>              
            </li>
            <li>                  
            </li>
        </ul>
   </div>
</div>
</div>)}    
</>);
}
