import React from 'react';
import PostCard from '@/components/postcard/PostCard'

const getData = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // if(!res?.ok) throw new Error('Wrong')
  const dt = res.json()
  return dt
}

export default async function Blog() {  

  const posts = await getData()

  return (
    <div className='blogpost-container'>
      <h3>BLOG POSTS</h3>
      <div className='post-container'>
        {posts?.length !== 0 &&  
        posts?.map((post,index) => (<PostCard key={post?.id} post={post}/>))}
      </div>      
    </div>
  )
}
