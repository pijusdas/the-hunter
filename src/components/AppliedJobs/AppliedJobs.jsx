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
            <div className='px-12 mt-30 '>
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