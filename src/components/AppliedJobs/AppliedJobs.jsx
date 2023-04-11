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
            <h1 className='text-center '>Applied Jobs</h1>

            <div className='px-12 mt-30 '>
                {
                    apliedsjob.map(singlejobb =>  <ApplyJob
                    key={singlejobb.id}
                    singlejobb={singlejobb}
                    ></ApplyJob> )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;