import React from 'react';

const Reviews = () => {
    return (
        <div className='bg-gradient-to-br from-[#632ee3] to-[#9f62f2] p-10'>
            <h1 className='font-bold text-xl md:text-4xl text-white text-center mb-5'>Trusted by Millions, Built for You</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-2'>
                <div className='text-white text-center'>
                    <p>Total Downloads</p>
                    <h1 className='text-5xl md:text-6xl font-bold mt-1 mb-1'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <p>Total Reviews</p>
                    <h1 className='text-5xl md:text-6xl font-bold mt-1 mb-1'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <p>Active Apps</p>
                    <h1 className='text-5xl md:text-6xl font-bold mt-1 mb-1'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;