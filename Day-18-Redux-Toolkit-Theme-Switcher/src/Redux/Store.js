import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Slices/ThemeSlice'

export const store = configureStore({
    reducer: {
        changeTheme: themeSlice
    }
})