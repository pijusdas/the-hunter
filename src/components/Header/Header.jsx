import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    
        <div className=' md:flex justify-between items-center px-12 py-12 bg-slate-100'>
            <h1 className=' text-5xl font-black '>The Hunter</h1>
            <div >
                <ul className=' md:flex justify-between  md:space-x-8'>
                   <li> <Link to={'/'}>Home</Link></li>
                   <li> <Link to={'/statistic'}>Statistic</Link></li>
                   <li> <Link to={'/details'}>Job Details</Link></li>
                   <li> <Link to={'/applied'}>Applied Job</Link></li>
                   <li> <Link to={'/blog'}>Blog</Link></li>                    
                </ul>
            </div>
            <button className='btn-primary'>Start Applying</button>
        </div>
    );
};

export default Header;