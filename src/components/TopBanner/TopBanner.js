import React from 'react';
import quiz from '../../images/quiz.jpg'

const TopBanner = () => {
    return (
        <div className=' w-11/12 mx-auto grid md:grid-cols-2 shadow-lg rounded'>
            <div >
                <img src={quiz} alt="" />
            </div>
            <div className='mt-6 md:mt-16 text-start px-6  pb-6'>
                <h1 className='text-3xl text-slate-500 font-semibold '>We're Quiz Freak!</h1>
                <p className='text-xl text-slate-600 font-medium mt-6'>Our website provides categorize quiz on different topic.It will help you to prepare yourself for your upcoming interviews </p>
                <h2 className='mt-4 text-2xl text-blue-600 font-semibold '> So, Hurry up!</h2>
            </div>
        </div>
    );
};

export default TopBanner;