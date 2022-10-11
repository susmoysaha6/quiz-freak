import React from 'react';

const Options = ({ option }) => {
    return (
        <div>
            <button type='radio' ><p>{option}</p></button>
        </div>
    );
};

export default Options;