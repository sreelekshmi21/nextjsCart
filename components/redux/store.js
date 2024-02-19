import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from '../redux/slice/cartSlice'

export const store = configureStore({
    reducer:{
        cart: cartSliceReducer
    }
})