import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const [singlejob, setSinglejob] = useState({})

    const {
        jobDescription, jobResponsibility, requirements, experiences, jobTitle, location, phone, salary, email
    } = singlejob


    const id = useParams()
    const jobb = useLoaderData()

    console.log(singlejob)

    useEffect(() => {
        const details = jobb.find(job => job.id == id.jobId)
        setSinglejob(details)
    }, [])
    return (
        <div className=' mt-32 my-32'>
            <h1 className=' text-center text-lg font-bold'>Job Details</h1>

            <div className='mt-32 px-20 flex gap-12'>
                <div className='w-[70%]'>
                    <p><b>Job Description:</b> {jobDescription}</p>

                    <p><b>Job Responsibility: </b> {jobResponsibility}</p>

                    <p><b>Educational Requirements:</b> {requirements} </p>

                    <p><b>Experiences:</b> {experiences} </p>
                </div>
                <div className='w-[30%]'>
                    <div className=' bg-purple-100  p-4 mb-5'>
                        <h1 className=' font-bold'>Job Details</h1>

                        <div className=' border-t-2 border-b-2 mt-5'>
                            <p className=' my-3'>Salary: {salary}</p>
                            <p className=' my-3'>Job TItle: {jobTitle}</p>

                            <h1 className='mb-3  font-bold'>Contact Information</h1>
                        </div>
                        <p className=' py-3'>Phone: {phone} </p>
                        <p className='py-3'>Email:{email}</p>
                        <p>Address: {location} </p>
                    </div>
                    <button className='btn-apply'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;