

import { getProductById } from '@/api/providers'
import AddToCart from '@/components/AddToCart'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default async function SingleProduct({params}) {

  console.log('#PARAMS prod',params)

  const {slug} = params

  const pdt = await getProductById(slug)


  return (
    <>
     <div className="md:flex">
       <div className="md:flex-shrink-0">
    {/* <img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"> */}
              <Image
                  src={pdt.image}
                  alt={pdt?.description}
                //   fill
                //   className='h-full w-full object-cover object-center transition-opacity group-hover:opacity-75'
                  width="500" height="300"
                />
        </div>
  <div className="mt-4 md:mt-0 md:ml-6">
    <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{pdt?.title}</div>    
    <p className="mt-2">{pdt?.description}</p>
    <div className="mt-2">{pdt?.price}</div>
    <div className='my-2'>       
       <AddToCart
          product={pdt}
        />
    </div>
  </div>
</div>
    </>
  )
}
