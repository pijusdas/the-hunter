import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
        if(id){
            addToDb(id)
            toast("Apply Succesfully!")
        }
        
    }



    return (
        <div className='  '>
            

            <div className=' bg-slate-100 p-12'>
                <h1 className='text-center text-2xl font-bold -mt-5'>Applied Jobs</h1>

            </div>
            <div className='mt-32 px-20 lg:flex gap-12'>
                <div className='lg:w-[70%]'>
                    <p><b>Job Description:</b> {jobDescription? jobDescription: ''}</p>

                    <p className=' py-6'><b>Job Responsibility: </b> {jobResponsibility? jobResponsibility:''}</p>

                    <p className='py-6'><b>Educational Requirements:</b> {requirements? requirements: ''} </p>

                    <p><b>Experiences: <br /> <br /> </b> {experiences? experiences: ''} </p>
                </div>
                <div className='lg:w-[30%] sm:mt-5 '>
                    <div className=' bg-purple-100  p-4 mb-5'>
                        <h1 className=' font-bold'>Job Details</h1>

                        <div className=' border-t-2 border-b-2 mt-5'>
                            <p className=' my-3 flex'>
                            <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                <b>Salary:</b> {salary? salary: ''}</p>
                            <p className=' my-3 flex'>
                            <CalendarDaysIcon className="h-6 w-6 text-blue-500" />
                                <b>Job TItle:</b> {jobTitle? jobTitle: ''}</p>

                            <h1 className='mb-3  font-bold'>Contact Information</h1>
                        </div>
                        <p className=' py-3 flex'>
                        <PhoneIcon className="h-6 w-6 text-blue-500" />
                            <b>Phone:</b> {phone? phone: ''} </p>
                        <p className='py-3'>
                        <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                            <b>Email:</b>{email? email: ''}</p>
                        <p className=' flex'> 
                        <MapPinIcon className="h-6 w-6 text-blue-500" />
                            <b>Address:</b>{location} </p>
                    </div>
                    <button onClick={() => datAddTobD(id)} className='btn-apply'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;