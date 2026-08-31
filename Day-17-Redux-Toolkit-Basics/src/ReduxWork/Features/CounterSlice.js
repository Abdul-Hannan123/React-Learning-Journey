import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        IncreaseByValue: (state, actions) => {
            state.value += actions.payload
        },
        DecreaseByValue: (state, actions) => {
            state.value -= actions.payload
        }
    }
})

export const { increment, decrement, IncreaseByValue, DecreaseByValue } = counterSlice.actions
export default counterSlice.reducer