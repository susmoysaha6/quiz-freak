import React from 'react';

const SingleTopic = ({ topic }) => {
    const { name, logo } = topic;
    return (
        <div className='mx-auto border w-11/12 rounded shadow-lg my-5'>
            <img className='bg-gray-200 ' src={logo} alt="" />
            <div className='flex justify-between py-3'>
                <p className='pl-2 py-1'>{name}</p>
                <button className='px-2 py-1 mx-1 rounded  bg-blue-900 text-white flex'>Start Practice <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default SingleTopic;