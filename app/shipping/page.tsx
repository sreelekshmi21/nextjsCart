"use client";

import CheckoutCard from '@/components/CheckoutCard';
import CheckoutStepper from '@/components/CheckoutStepper';
import { saveShippingAddress } from '@/components/redux/slice/cartSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function ShippingAddress() {

    const router = useRouter()
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: { errors }, setValue} = useForm()

    const submitHandler = ({ fullName, state, city, postalCode, country }) => {
          dispatch(saveShippingAddress({fullName, state, city, postalCode, country}));
          router.push('/payment')
    };    

    const {shippingAddress} = useSelector(state => state.cart)

    useEffect(() => {
      console.log('shippingAddress',shippingAddress)
      setValue('fullName', shippingAddress.fullName)
      setValue('state', shippingAddress.state)
      setValue('city', shippingAddress.city)
      setValue('postalCode', shippingAddress.postalCode)
      setValue('country', shippingAddress.country)
    }, [shippingAddress])
    

    return (
        <>
        <CheckoutStepper activeStep={0}/>
        <form onSubmit={handleSubmit(submitHandler)}>
           <label>FullName</label>
           <input type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="fullName"
          name="fullName"
          placeholder={`Enter FullName`}
          {...register("fullName", {
            required: "Full Name required",
          })}
        />
        {errors?.fullName && (<span className="text-red-500">{errors?.fullName?.message}</span>)}
        <label>City</label>
        <input type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="city"
          name="city"
          placeholder={`Enter City`}
          {...register("city", {
            required: "City required",
          })}
        />
        {errors?.city && (<span className="text-red-500">{errors?.city?.message}</span>)}
        <label>State</label>
        <input type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="state"
          name="state"
          placeholder={`Enter State`}
          {...register("state", {
            required: "State required",
          })}
        />
        {errors?.state && (<span className="text-red-500">{errors?.state?.message}</span>)}
        <label>Country</label>
        <input type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="country"
          name="country"
          placeholder={`Enter Country`}
          {...register("country", {
            required: "Country required",
          })}
        />
        {errors?.country && (<span className="text-red-500">{errors?.country?.message}</span>)}
        <label>Postal Code</label>
        <input type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="postalCode"
          name="postalCode"
          placeholder={`Enter postalCode`}
          {...register("postalCode", {
            required: "PostalCode required",
          })}
        />
        {errors?.postalCode && (<span className="text-red-500">{errors?.postalCode?.message}</span>)}
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
      <CheckoutCard />
      </>
  )
}
