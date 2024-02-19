import PostUser from '@/components/postUser/PostUser'
import Image from 'next/image'
// import { useParams } from 'next/navigation'
import React, { Suspense } from 'react'


const getData = async (slug) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache: 'no-store'})
  // if(!res?.ok) throw new Error('Wrong')
  const dt = res.json()
  return dt
}

export const generateMetadata = async ({params}) =>{

  const {slug} = params
  const post = await getData(slug)

  return {
    title: post?.title,
    description: post?.desc
  }
}

export default async function SinglePost({params}) {

  // const slug = useParams()

  // console.log('#SS',slug)
  // const post = await getData(slug)
  console.log('#PARAMS',params)
  const {slug} = params
  const post = await getData(slug)

  return (
    <div className='single-post-container'>
        <div className='img-container'>
        <Image src="/bird-portrait.jpg" alt="BIRD" width="300" height="300"/>
      </div>
        <div className='single-container'>
        {/* <Image src="/bird-portrait.jpg" alt="BIRD" width="100" height="300"/> */}
          <h3>Title</h3>
          <h2>{post?.title}</h2>
        <p>Author: {post?.body}</p> 
        <Suspense fallback={<div>LOADING......</div>}>
          <PostUser userId={post?.userId}/>
        </Suspense>
        {/* <PostUser userId={post?.userId}/> */}
        <p>Published: 22</p> 
      </div>      
    </div>
  )
}
