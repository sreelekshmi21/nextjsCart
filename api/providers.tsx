

export const getProducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    // if(!res?.ok) throw new Error('Wrong')
    const pdt = res.json()
    return pdt
}


export const getProductById = async (slug) =>{
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`)
    // if(!res?.ok) throw new Error('Wrong')
    const singlePdt = res.json()
    return singlePdt
  }