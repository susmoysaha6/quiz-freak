import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from '../SingleTopic/SingleTopic';

const Topic = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div>
            {
                topics.map(topic => <SingleTopic key={topic.id} topic={topic}></SingleTopic>)
            }
        </div>
    );
};

export default Topic;