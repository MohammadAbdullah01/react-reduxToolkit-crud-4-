import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import AllBooks from '../features/books/AllBooks';
import EditBook from '../features/books/EditBook';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/all-books' element={<AllBooks />} />
                        <Route path='/add-book' element={<AddBook />} />
                        <Route path='/edit-book' element={<EditBook />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Index;