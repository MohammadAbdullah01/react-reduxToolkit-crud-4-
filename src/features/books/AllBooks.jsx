import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteBook, getBooks } from './booksSlice';

const AllBooks = () => {
    const { books } = useSelector(state => state.books)
    const dispatch = useDispatch()
    dispatch(getBooks())
    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteBook(id))
    }
    const navigate = useNavigate()
    return (
        <div >
            <h1 style={{ marginBottom: "20px" }}>All Books List</h1>

            <div>
                <table style={{ margin: "0 auto", width: "90%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => {
                            const { id, name, author } = book;
                            return <tr
                                key={id}
                            >
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>

                                    <Link to='/edit-book' state={{ id, name, author }} >
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(id)} style={{ marginLeft: "10px" }}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBooks;