import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')) :null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    userAccountInfo: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, userAccountInfo } = counterSlice.actions

export default counterSlice.reducer