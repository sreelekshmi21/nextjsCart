

import React from 'react'
// import Header from './Header'
// import CartSidebar from './CartSidebar'
// import { useSelector } from 'react-redux';
// import { usePathname } from 'next/navigation';
// import ProductsSidebar from './CategoriesProducts';
import Footer from './footer/NavBar';

export default function App({children}) {

  
  return (
    <>
      <div className='h-screen'>
      <div className='mr-32'>
        <main className="p-4">          
          {children}</main>         
      </div>
      <Footer />
      </div>      
      {/* {pathname === '/products' && cartItems?.length > 0 && <CartSidebar />} */}
    </>
  )
}
