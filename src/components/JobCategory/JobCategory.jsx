import React from 'react';

const JobCategory = ({categorie}) => {
    return (
        <div className=' bg-slate-100    p-10 rounded-lg'>
            <img className=' rounded-lg h-16 w-16' src={categorie.img} alt="" />
            <h1 className=' font-bold text-xl mt-6'>{categorie.name}</h1>
            <p className=' mt-4 text-slate-500'>{categorie.description}</p>
        </div>
    );
};

export default JobCategory;