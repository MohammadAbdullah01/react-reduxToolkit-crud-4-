import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from './booksSlice';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = { id: uuidv4(), name: name, author: author };
        dispatch(addBook(newBook))
        navigate("/all-books", { replace: true })
    }
    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Add A New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' value={name} name='name' onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="author">Name:</label>
                        <input type="text" id='author' value={author} name='author' onChange={(e) => setAuthor(e.target.value)} s required />
                    </div>
                    <button>Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;