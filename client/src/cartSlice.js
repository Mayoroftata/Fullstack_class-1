import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name:'cart',
    initialState:{value: 0},
    reducers:{
     increase: state =>{state.value += 2},
     decrease: state =>{state.value -= 2},
    }
})

export const {increase, decrease} = cartSlice.actions
export default cartSlice.reducer;