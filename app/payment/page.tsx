"use client";

import CheckoutCard from '@/components/CheckoutCard';
import CheckoutStepper from '@/components/CheckoutStepper';
import { savePayment } from '@/components/redux/slice/cartSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function Payment() {

    const router = useRouter()
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: { errors }, setValue} = useForm()

    const {paymentMethod} = useSelector(state => state.cart)

    const submitHandler = ({ paymentMethod }) => {
        console.log('paymentMethod',paymentMethod)
          dispatch(savePayment(paymentMethod));
          router.push('/placeorder')
    };  
    
    const paymentSteps = ["CashOnDelivery", "GooglePay", "PhonePe"];

    useEffect(() => {     
      setValue('paymentMethod', paymentMethod)
    }, [paymentMethod])
    

    return (
        <>
        <CheckoutStepper activeStep={1}/>
        <form onSubmit={handleSubmit(submitHandler)}>
        {paymentSteps?.map((payment, index) => (
          <span key={payment}>
            <input type="radio" className="p-2 outline-none focus:ring-0"
              id="payment"
              name="paymentMethod"
              value={payment}
              {...register("paymentMethod", {
                required: "Select payment method",
              })}
              // checked={paymentMethod}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </span>
        ))}
        {errors?.paymentMethod && (<span className="text-red-500">{errors?.paymentMethod?.message}</span>)}
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
      <CheckoutCard />
      </>
  )
}
