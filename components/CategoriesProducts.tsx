
'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import AddToCart from './AddToCart';


export default function CategoriesProducts({products}) {

  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch()  

  const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

    const handleChange = (e,cat) =>{
      console.log('#PP',e.target.checked,cat,e.target.value)
      const selCopy = [...selectedCategories]
      if(e.target.checked){
        selCopy.push(cat)
      }
      else selCopy.splice(selCopy.indexOf(cat),1)
      setSelectedCategories(selCopy)
      // dispatch(saveSelectedCategories(selCopy))
    }

    const handleClickAll = () =>{
      selectedCategories?.length !== 0 && setSelectedCategories([])
    }
   
    
    useEffect(() => {
      console.log('#PP sel',selectedCategories,products, products.filter(itm => selectedCategories.includes(itm?.category)))
    }, [selectedCategories])
    
    const pdt = selectedCategories?.length === 0 ? products : products.filter(itm => selectedCategories.includes(itm?.category))    
       
    
  return (    
        <>
          <div>
            <div>CATEGORIES</div>
            {/* <div className="font-bold text-white-700 m-5">wwwwwww</div> */}
            <>
              {categories?.map((cat) => (
                <span className="p-10" key={cat}>
                   <input type="checkbox" id={cat} 
                   value={cat.charAt(0).toUpperCase() +
                    cat.slice(1)}
                    checked={selectedCategories.includes(cat)}
                   name={cat} onChange={(e) => handleChange(e, cat)}/>
                   <label>{cat.charAt(0).toUpperCase() + cat.slice(1)}</label>
                </span>
              ))}
              <span className="p-5 rounded-md bg-red-400" onClick={() => handleClickAll('all')}>
                    All
                </span>
            </>           
        </div>
        <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 md:grid-cols-3'>
          {/* <ProductsContainer /> */}
          {pdt?.length > 0 && pdt.map(product => (
            <div key={product.id}>
            <Link href={`/products/${product.id}`}
              className='group'>
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-stone-200 xl:aspect-w-7 xl:aspect-h-8'>
                <Image src={product.image}
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
        </div>          
        </>   
  )
}
