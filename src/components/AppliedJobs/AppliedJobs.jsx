import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ApplyJob from '../appyJob/ApplyJob';

const AppliedJobs = () => {
 
    const singlejob = useLoaderData()
    console.log(singlejob)

    let apliedsjob = []
    const savedId = getShoppingCart()
    for (const id in savedId) {

        const foundJob = singlejob.find(job => job.id == id);
        if (foundJob) {
            apliedsjob.push(foundJob)
        }
    }


    return (
        <div>
            <div className=' bg-slate-100 p-12'>
                <h1 className='text-center text-2xl font-bold -mt-5'>Applied Jobs</h1>

            </div>
            <div className='px-12 mt-32 '>
                <div className=' flex justify-end mb-9 gap-5'>
                    <button className='btn-secondery'>Remote Option</button>
                    <button className='btn-secondery'>On-Site Option</button>
                </div>
                {
                    apliedsjob.map(singlejobb => <ApplyJob
                        key={singlejobb.id}
                        singlejobb={singlejobb}
                    ></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;