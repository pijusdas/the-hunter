import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ApplyJob = ({ singlejobb }) => {
    const { companyName, img, jobTitle, location, salary, vacation } = singlejobb


    return (
        <div className='flex justify-between items-center border p-8 rounded-lg mb-6'>
            <div className='flex  items-center gap-5'>
                <img className=' h-60 w-60' src={img} alt="" />
                <div>
                    <h1 className=' text-lg font-bold'>{jobTitle}</h1>
                    <h1 className=' text-xl text-gray-500 py-3'>{companyName}</h1>
                    <div className='flex gap-2'>
                        <p className=' border border-purple-500  px-5 py-2  text-purple-500 '>{vacation[0]}</p>
                        <p className=' border border-purple-500  px-5 py-2 text-purple-500'>{vacation[1]}</p>
                    </div>
                    <div className=' flex gap-5 py-2 items-center'>
                        <p className=' text-gray-500 flex'>
                            <MapPinIcon className="h-6 w-6 text-blue-500" />
                            {location}</p>
                        <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                        <p className=' text-gray-500 flex'>{salary}</p>
                    </div>
                </div>
            </div>
            <Link to='/details'>
                <button className='btn-secondery'>View Details</button>
            </Link>
        </div>
    );
};

export default ApplyJob;