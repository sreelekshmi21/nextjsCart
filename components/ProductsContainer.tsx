
import React, { useEffect, useState } from 'react'
import { getProducts } from '@/api/providers'
import AddToCart from '@/components/AddToCart'
import Image from 'next/image'
import Link from 'next/link'


export default async function ProductsContainer() {
 
  const products = await getProducts()

  console.log('#products',products)    
    

  return (     
        <>
          {products?.length > 0 && products.map(product => (
            <div key={product.id}>
            <Link href={`/products/${product.id}`}
              className='group'>
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-stone-200 xl:aspect-w-7 xl:aspect-h-8'>
                <Image
                  src={product.image}
                  alt={product?.description}               
                  width="500" height="500"
                />
              </div>
              <h3 className='mt-4 text-sm'>{product?.title}</h3>
              <p className='mt-1 text-lg font-medium'>
                {product?.price}
              </p>
            </Link>
            <div className='my-2'>       
            <AddToCart
               product={product}
             />
         </div>
         </div>
          ))}          
        </>    
  )
}
