import booksReducer from "../features/books/booksSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export default store;