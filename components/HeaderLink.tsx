'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HeaderLink() {

    const links = [{path: '/',
                  title: 'Home'},
                  {path: '/about',
                  title: 'About'},

                  {path: '/products',
                  title: 'Products'},


                  {path: '/blog',
                  title: 'Blog'},
                  {path: '/contact',
                  title: 'Contact'}                
                ]

  const pathName = usePathname() 

  return (
    <ul className='container'>
              <>
              {links?.map((route,index) => <li key={route?.title}
              className={`${route?.path === pathName ? 'active' : ''}`}>
                <Link href={route?.path}>{route?.title}</Link>
              </li>)}            
              </>
            </ul>
  )
}

