import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        { id: "5b5654a9-0c50-4483-84bf-037c818ccace", name: "bd amr desh", author: "abdullah" }
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        getBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload;
            console.log(id, name, author);
            const isBookExist = state.books.filter((book) => book.id === id);
            console.log(isBookExist);
            if (isBookExist) {
                isBookExist[0].name = name;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})

export const { getBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;