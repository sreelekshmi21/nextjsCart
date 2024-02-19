import { createSlice } from "@reduxjs/toolkit"
// import Cookies from 'js-cookie';

// const st = Cookies.get('cart')
// console.log('addToCart cookie',st)

const initialState = {
    cartItems: [],
    itemsPrice: null,
    totalQty: 0,
    shippingAddress: {},
    paymentMethod: '',
    selectedCategories: []
}



// const initialState =  Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {
//   cartItems: [],
//   itemsPrice: null,
//   totalQty: 0,
//   shippingAddress: {},
//   paymentMethod: '',
//   selectedCategories: []
// }

console.log('addToCart cookie initialState',initialState)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state,action) =>{
            console.log('addToCart',state,action)
            const item = action.payload
            // const itemIndex = state.cartItems.findIndex(x => x?.id === item?.id)
            // if(itemIndex !== -1) state.cartItems[itemIndex][qty] = item?.qty + 1
            
            // else state.cartItems = [...state.cartItems, item]
            // const item = action.payload?.product

            // const newQty = action.payload?.qty ? action.payload?.qty : 1
      const existItem = state.cartItems.find((x) => x.id === item.id)

      if (existItem && item?.sel) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        )
      //   state.cartItems = state.cartItems.map((x) =>
      //   x.id === existItem.id ? item : x
      // )
      } 
      //====
      else if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? {...x, qty: x?.qty + 1} : x
        )
      //   state.cartItems = state.cartItems.map((x) =>
      //   x.id === existItem.id ? item : x
      // )
      } 
      
      
      else {
        state.cartItems = [...state.cartItems, { ...item, qty: 1 }]
      }
      state.itemsPrice = 
      state.cartItems.reduce((acc,curr) => acc + parseFloat(curr?.price * curr?.qty),0).toFixed(2)

      console.log('#TOT',state.itemsPrice)

      state.totalQty = state.cartItems.reduce((acc,curr) => acc + parseInt(curr?.qty),0)

      state.shippingPrice = state.itemsPrice > 100 ? 0 : 50

      state.totalPrice = parseFloat(state.itemsPrice + state.shippingPrice)


      // Cookies.set('cart', JSON.stringify(state))

      // const ck = JSON.parse(Cookies.get("cart"))

      // console.log('removeFromCart cookie',ck)

      // const GetCookie = () => {
      //   alert(Cookies.get("token"));
      // };
        
        },
        removeFromCart: (state,action) =>{
          console.log('removeFromCart',state,action)
          const id = action.payload
          state.cartItems = state.cartItems.filter(x => x?.id !== id)

          state.itemsPrice = 
          state.cartItems.reduce((acc,curr) => acc + parseFloat(curr?.price * curr?.qty),0)

          state.totalQty = state.cartItems.reduce((acc,curr) => acc + parseInt(curr?.qty),0)

          state.shippingPrice = state.itemsPrice > 100 ? 0 : 50

          state.totalPrice = parseFloat(state.itemsPrice + state.shippingPrice)

          // Cookies.set('cart', JSON.stringify(state))
        },

        decrementFromCart: (state,action) =>{
          console.log('decrementFromCart',state,action)
          const item = action.payload.product
          state.cartItems = state.cartItems.map(x => x?.id === item?.id ? 
            {...x,qty: x.qty - 1} : x)

          state.itemsPrice = 
          state.cartItems.reduce((acc,curr) => acc + parseFloat(curr?.price * curr?.qty),0)

          state.totalQty = state.cartItems.reduce((acc,curr) => acc + parseInt(curr?.qty),0)

          state.shippingPrice = state.itemsPrice > 100 ? 0 : 50

          state.totalPrice = parseFloat(state.itemsPrice + state.shippingPrice)
        },

        saveShippingAddress: (state, action) => {
          console.log('saveShippingAddress',state,action)
          state.shippingAddress = action.payload
          // Cookies.set('cart', JSON.stringify(state))
        },
        savePayment: (state, action) => {
          console.log('savePayment',state,action)
          state.paymentMethod = action.payload
          // Cookies.set('cart', JSON.stringify(state))
        },

        saveSelectedCategories: (state, action) => {
          console.log('saveSelectedCategories',state,action)
          state.selectedCategories = action.payload
          // state.paymentMethod = action.payload
          // Cookies.set('cart', JSON.stringify(state))
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    decrementFromCart,
    saveShippingAddress,
    savePayment,
    saveSelectedCategories
   
  } = cartSlice.actions
  
  export default cartSlice.reducer