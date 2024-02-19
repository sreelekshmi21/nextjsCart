import React from 'react'



const getData = async (userId) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  // if(!res?.ok) throw new Error('Wrong')
  const dt = res.json()
  return dt
}

export default async function PostUser({userId}) {

  const user = await getData(userId)

  return (
    <div>
        <h3>PostUser</h3>
        <h3>{user?.name}</h3>
        <h3>{user?.email}</h3>
    </div>
  )
}
