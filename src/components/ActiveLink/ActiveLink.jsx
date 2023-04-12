import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive? ' text-sky-800 font-bold': ''}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;