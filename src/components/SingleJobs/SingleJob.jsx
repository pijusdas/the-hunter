import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleJob = ({job}) => {
    const {id,img,companyName,jobTitle,location,salary,vacation} = job
    return (
        <div className=' p-5'>
            <img className='  h-32 w-36' src={img} alt="" />
            <h1 className=' text-lg font-bold'>{jobTitle}</h1>
            <p className=' text-lg text-slate-500 py-2'>{companyName}</p>
             <div className='flex gap-2'>
                <p className=' border border-purple-500  px-5 py-2  text-purple-500 '>{vacation[0]}</p>
                <p className=' border border-purple-500  px-5 py-2 text-purple-500'>{vacation[1]}</p>
             </div>
             <div className=' flex gap-5 py-2 items-center'>
                <p className=' text-gray-500 flex'> 
                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                {location}</p>
                <p className=' text-gray-500 flex'>
                <MapPinIcon className="h-6 w-6 text-blue-500" />
                    {salary}</p>
             </div>
             <Link to={`/details`}>
             <button className='btn-secondery'>View Details</button>
             </Link>
        </div>
    );
};

export default SingleJob;