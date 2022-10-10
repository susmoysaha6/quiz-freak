import React from 'react';
import { Link } from 'react-router-dom';
import cry from '../../images/cry.png';

const Error = () => {
    return (
        <div >

            <img className='mx-auto mt-32 w-1/3 ' src={cry} alt="" />
            <h1 className='text-5xl text-red-700 mt-2'>Opps! 404, Not Found.</h1>
            <h2 className='text-4xl text-red-700 mt-2'>This path is not available</h2>
            <button className='bg-sky-500 p-4 m-8 rounded text-white'>
                <Link to='/'>Back to Home</Link>
            </button>

        </div>
    );
};

export default Error;