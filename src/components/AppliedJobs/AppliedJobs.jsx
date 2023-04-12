import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ApplyJob from '../appyJob/ApplyJob';

const AppliedJobs = () => {
    const [applies, setApplies] = useState()
    const singlejob = useLoaderData()
    console.log(applies)

    let apliedsjob = []
    const savedId = getShoppingCart()
    useEffect(() => {
        for (const id in savedId) {

            const foundJob = singlejob.find(job => job.id == id);
            if (foundJob) {
                apliedsjob.push(foundJob)
            }
            if (apliedsjob) {

                setApplies(apliedsjob)
            }
        }

    }, [])

    // handle remote jobs on click remote job option in applied job page
    const handlingRemoteJob = () => {
        const foundremote = singlejob.filter(job => job.vacation[0] == 'Remote')
        console.log(foundremote)
    
        let remoteJobs = []
        for (const idd in savedId) {
            const handleRemot = foundremote?.find(job => job.id == idd)
            if (handleRemot) {
                remoteJobs.push(handleRemot)
            }
            if(remoteJobs){
                setApplies(remoteJobs)
            }
        }
    }
    const handlingOnsiteJob = () => {
        const foundOnsite = singlejob.filter(job => job.vacation[0] == 'Onsite')
        console.log(foundOnsite)
    
        let OnsiteJobs = []
        for (const idd in savedId) {
            const handleRemot = foundOnsite?.find(job => job.id == idd)
            if (handleRemot) {
                OnsiteJobs.push(handleRemot)
            }
            if(OnsiteJobs){
                setApplies(OnsiteJobs)
            }
        }
    }


    return (
        <div>
            <div className=' bg-slate-100 p-12'>
                <h1 className='text-center text-2xl font-bold -mt-5'>Applied Jobs</h1>

            </div>
            <div className='px-12 mt-32 '>
                <div className=' flex justify-end mb-9 gap-5'>
                    <button onClick={handlingRemoteJob} className='btn-secondery'>Remote Option</button>
                    <button onClick={handlingOnsiteJob} className='btn-secondery'>On-Site Option</button>
                </div>
                {
                    applies?.map(singlejobb => <ApplyJob
                        key={singlejobb.id}
                        singlejobb={singlejobb}
                    ></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;