import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCard({post}) {
  return (
    <div className='postcard-container'>
        <Image src="/bird-portrait.jpg" alt="BIRD" width="300" height="300"/>
        <h3>Title: {post?.id}</h3>
        <h2>{post?.title}</h2>
        <p>DESC</p>
        <p>{post?.body.slice(0,20)}</p>
        <Link href={`/blog/${post?.id}`} className='bg-green-300 text-black'>Read More</Link>
    </div>
  )
}
