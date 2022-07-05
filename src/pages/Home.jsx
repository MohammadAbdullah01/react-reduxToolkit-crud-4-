import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Welcome to my React and Redux CRUD Operation app</h2>
            <h2 style={{ textAlign: "center", marginTop: "10px" }}>Please click below button to view all books.</h2>
            <div
                style={{ textAlign: "center", margin: "20px 0" }}
            >
                <Link to='/all-books'>
                    <button>All Books List</button>
                </Link>
            </div>
        </div >
    );
};

export default Home;