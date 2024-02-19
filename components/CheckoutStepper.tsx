'use client';


import { useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CheckoutStepper({activeStep}) {

  const steps = [
    {
      id: "Step 1",
      name: "Shipping Info",
    },
    {
      id: "Step 2",
      name: "Payment Method",
    },
    {
      id: "Step 3",
      name: "Place Order",
    },
  ];

  const router = useRouter()

  const {cartItems,itemsPrice,shippingPrice,totalPrice,shippingAddress,paymentMethod} = useSelector(state => state.cart)

  

  const handleStep = (step) => {
    console.log('#SS',step)
    // if(step?.includes('Shipping')) router.push('/shipping')
    // else if(step?.includes('Payment')) router.push('/payment')
    // else if(step?.includes('Order') && paymentMethod !== '') router.push('/placeorder')
  }; 

  return (
    <div className="mb-5 flex flex-wrap">
    {steps.map((step, index) => (
      <div key={step?.id}
        className={`flex-1 border-b-2 text-center ${activeStep === index ? "text-xl font-medium text-sky-600" : ""}`}>
        {step?.name}
      </div>
    ))}
  </div>
)
}
