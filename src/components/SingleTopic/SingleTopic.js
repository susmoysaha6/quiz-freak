import React from 'react';
import { Link } from 'react-router-dom';

const SingleTopic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='mx-auto border w-11/12 rounded-lg shadow-lg my-5'>
            <img className='bg-slate-700 rounded-lg w-full' src={logo} alt="" />
            <div className='flex justify-between items-center py-3'>
                <div className='pl-2 py-1 text-start text-slate-600 font-medium'>
                    <p>{name}</p>
                    <p>Total quiz: {total}</p>
                </div>
                <button className='bg-blue-800 text-white py-2 mx-1 px-2 rounded  flex'> <Link to={`/topic/${id}`}>Start Practice</Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default SingleTopic;