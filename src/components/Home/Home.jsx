import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {

    
    const categories = useLoaderData();

    useEffect(()=>{
        fetch('FeatureJob.json')
        .then(res => res.json())
        .then(data => data)
    },[])
     


    return (
        <>
            <div className=' md:flex justify-between items-center gap-12 px-12 mb-6 bg-slate-100'>
                <div>
                    <h1 className=' text-7xl font-extrabold   text-slate-700'>One Step <br /> Closer From Your <br />
                        <span className=' text-purple-500'>Dream Job</span></h1>
                    <p className=' text-gray-500 py-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div className=' md:h-full'>
                    <img src="../../../images/hardy.png" alt="" />
                </div>
            </div>

            <section className=' mt-20 px-12'>
                <h1 className=' text-center text-3xl font-bold'>Job Category List</h1>
                <p className=' text-center py-5 text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your futuret</p>

                <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8'>
                    {
                        categories.map(categorie => <JobCategory
                        key={categorie.id}
                        categorie={categorie}
                        ></JobCategory>)
                    }
                </div>
            </section >

            <section className=' mt-20 px-12'>
                    <h1 className=' text-center text-3xl font-bold'>Featured Jobs</h1>
                    <p className=' text-center py-5 text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </section>
        </>
    );
};

export default Home;