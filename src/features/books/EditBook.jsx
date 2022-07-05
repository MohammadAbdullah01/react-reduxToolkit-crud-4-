import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './booksSlice';

const EditBook = () => {
    const location = useLocation()
    // const { id, name, author } = location?.state;
    // const [id, setId] = useState(location.state.id)
    const { id } = location.state;
    const [name, setName] = useState(location.state.name)
    const [author, setAuthor] = useState(location.state.author)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBook({ id, name, author }))
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
                    <button>Update Book</button>
                </div>
            </form>
        </div>
    );
};

export default EditBook;