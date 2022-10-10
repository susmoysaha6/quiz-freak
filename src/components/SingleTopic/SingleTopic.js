import React from 'react';

const SingleTopic = ({ topic }) => {
    console.log(topic);
    const { name, logo } = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default SingleTopic;