import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const data = useLoaderData();
    const topics = data.data;
    console.log(topics);

    return (
        <div>
            <h1>This is topic: {topics.length}</h1>
        </div>
    );
};

export default Topic;