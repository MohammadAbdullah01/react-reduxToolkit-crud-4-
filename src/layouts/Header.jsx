import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-off"} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-off"} to='/all-books'>All Books</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-off"} to='/add-book'>Add Book</NavLink>
            <hr />
        </nav>
    );
};

export default Header;