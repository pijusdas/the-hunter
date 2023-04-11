import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {

    const [singlejob, setSinglejob] = useState([])



    const {
        jobDescription, jobResponsibility, requirements, experiences, jobTitle, location, phone, salary, email, id
    } = singlejob



    const idd = useParams()
    const jobb = useLoaderData()

    useEffect(() => {
        const details = jobb.find(job => job.id == idd.jobId)
        setSinglejob(details)
    }, [])



    // add id to db
    const datAddTobD = (id) => {
        addToDb(id)
    }



    return (
        <div className=' mt-32 my-32'>
            <h1 className=' text-center text-lg font-bold'>Job Details</h1>

            <div className='mt-32 px-20 flex gap-12'>
                <div className='w-[70%]'>
                    <p><b>Job Description:</b> {jobDescription? jobDescription: ''}</p>

                    <p className=' py-6'><b>Job Responsibility: </b> {jobResponsibility? jobResponsibility:''}</p>

                    <p className='py-6'><b>Educational Requirements:</b> {requirements? requirements: ''} </p>

                    <p><b>Experiences: <br /> <br /> </b> {experiences? experiences: ''} </p>
                </div>
                <div className='w-[30%]'>
                    <div className=' bg-purple-100  p-4 mb-5'>
                        <h1 className=' font-bold'>Job Details</h1>

                        <div className=' border-t-2 border-b-2 mt-5'>
                            <p className=' my-3'><b>Salary:</b> {salary? salary: ''}</p>
                            <p className=' my-3'><b>Job TItle:</b> {jobTitle? jobTitle: ''}</p>

                            <h1 className='mb-3  font-bold'>Contact Information</h1>
                        </div>
                        <p className=' py-3'><b>Phone:</b> {phone? phone: ''} </p>
                        <p className='py-3'><b>Email:</b>{email? email: ''}</p>
                        <p><b>Address:</b>{location} </p>
                    </div>
                    <button onClick={() => datAddTobD(id)} className='btn-apply'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;