import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
    
        <div className=' md:flex justify-between items-center px-12 py-12 bg-slate-100'>
            <h1 className=' text-5xl font-black '>The Hunter</h1>
            <div >
                <ul className=' md:flex justify-between  md:space-x-8'>
                   <li> <ActiveLink to={'/'}>Home</ActiveLink></li>
                   <li> <ActiveLink to={'/statistic'}>Statistic</ActiveLink></li>
                   <li> <ActiveLink to={'/applied'}>Applied Job</ActiveLink></li>
                   <li> <ActiveLink to={'/blog'}>Blog</ActiveLink></li>                    
                </ul>
            </div>
            <button className='btn-primary'>Start Applying</button>
        </div>
    );
};

export default Header;