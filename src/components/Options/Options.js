import React from 'react';

const Options = ({ option }) => {
    console.log(option);
    return (
        <div>
            <button type='radio' className=' w-full bg-gray-50 m-1 text-gray-600 p-1 rounded shadow' >  <p>{option}</p> </button>
        </div>
    );
};

export default Options;