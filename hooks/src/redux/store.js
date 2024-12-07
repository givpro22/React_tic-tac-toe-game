import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import themeSlice from './theme'

export default configureStore({
    reducer:{
        user1: userReducer,
        theme1: themeSlice,
    }   
})