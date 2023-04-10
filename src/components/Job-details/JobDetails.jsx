import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobss = useLoaderData()
    console.log(jobss)
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;