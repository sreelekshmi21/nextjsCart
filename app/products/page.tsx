
import { getProducts } from '@/api/providers'
import CartSidebar from '@/components/CartSidebar'
import CategoriesProducts from '@/components/CategoriesProducts'
// import ProductsContainer from '@/components/ProductsContainer'
import React from 'react'

export default async function Products() {
    
  const products = await getProducts()

  console.log('#products',products)

  return (
       <>
       <CategoriesProducts products={products}/> 
       <CartSidebar />
       </>
  )
}
