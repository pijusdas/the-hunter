import React, { Children } from 'react';
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
        marks: 50,

    },
    {
        name: "Assigment-3",
        marks: 60,

    },
    {
        name: "Assigment-4",
        marks: 56,

    },
    {
        name: "Assigment-5",
        marks: 58,

    },
    {
        name: "Assigment-6",
        marks: 49,

    },
    {
        name: "Assigment-7",
        marks: 60,

    }
];
const Statistic = ( ) => {
    return (
        <div >
            <div  className=' bg-slate-100 p-12'>
                <h1 className='text-center text-2xl font-bold -mt-5'>Satistic</h1>

            </div>

            <div className='mt-32  flex flex-col justify-center items-center'>
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
        </div>
    );
};

export default Statistic;