import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-slate-800 mt-16 py-16'>
            <div className=' px-12  grid grid-cols-2    md:grid-cols-2 lg:grid-cols-5 gap-14'>
                <div>
                    <h1 className=' text-2xl font-bold text-slate-50 mb-5'>The hunter</h1>
                    <p className=' text-gray-300'>The Hunter - The hunter is a global job board that allows job seekers to search for job openings by industry </p>

                    <div className=' flex mt-5 gap-2'>
                        <img className=' rounded-full h-10 w-10' src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1681237521~exp=1681238121~hmac=4767df2b9836e3c392205b294679168844f8819ba0f9fe5f7ab4691a8c905424" alt="" />

                        <img className='  rounded-full h-10 w-10' src="https://img.freepik.com/premium-vector/facebook-3d-circle-icon_555017-92.jpg?w=740" alt="" />

                        <img className=' rounded-full h-10 w-10' src="https://img.freepik.com/premium-photo/twitter-application-logo-3d-rendering-white-background_41204-20481.jpg?w=900" alt="" />
                    </div>
                </div>

                <div>
                    <h1 className=' text-slate-100 font-bold text-lg mb-5'>Company</h1>
                    <p className='  text-gray-300'>About Us</p>
                    <p className=' text-gray-300 p-2'>Work</p>
                    <p className=' text-gray-300 mb-2'>Latest News</p>
                    <p className=' text-gray-300'>Careers</p>
                </div>
                <div>
                    <h1 className=' text-slate-100 font-bold text-lg mb-5'>Product</h1>
                    <p className=' text-gray-300'>Prototype</p>
                    <p className=' text-gray-300 py-2'>Plans & Pricing</p>
                    <p className=' text-gray-300 mb-2'>Customers</p>
                    <p className=' text-gray-300'>Integrations</p>
                </div>
                <div>
                    <h1 className=' text-slate-100 font-bold text-lg mb-5'>Support</h1>
                    <p className=' text-gray-300 '>Help Desk</p>
                    <p className=' text-gray-300 py-2'>Sales</p>
                    <p className=' text-gray-300 mb-2'>Become a Partner</p>
                    <p className=' text-gray-300'>Developers</p>
                </div>
                <div>
                    <h1 className=' text-slate-100 font-bold text-lg mb-5'>Contact</h1>
                    <p className=' text-gray-300 mb-2'>524 Broadway , NYC</p>
                    <p className=' text-gray-300'>+1 777 - 978 - 5570</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;