import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'changeTheme',
    initialState: {
        value: 'Light'
    },
    reducers: {
        ChangeTheme: (state) => {
            if(state.value=='Light'){
                state.value = 'Dark'
            }
            else{
                state.value='Light'
            }
        }
    }
})
export const { ChangeTheme } = themeSlice.actions
export default themeSlice.reducer