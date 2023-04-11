import React from 'react';
import { Link } from 'react-router-dom';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        name: "Assigment-1",
        marks: 60,
         
    },
    {
        name: "Assigment-2",
        marks: 60,
        
    },
    {
        name: "Assigment-3",
        marks: 60,
        
    },
    {
        name: "Assigment-4",
        marks: 60,
        
    },
    {
        name: "Assigment-5",
        marks: 58,
         
    },
    {
        name: "Assigment-6",
        marks: 59,
         
    },
    {
        name: "Assigment-7",
        marks: 60,
         
    }
];
const Statistic = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-32'>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
               <Link to='/'> <button className='btn-primary my-20'>Back to Home</button></Link>
        </div>
    );
};

export default Statistic;