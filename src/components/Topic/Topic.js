import React, { useContext } from 'react';
import { TopicContext } from '../Main/Main';

import SingleTopic from '../SingleTopic/SingleTopic';

const Topic = () => {
    const [topics] = useContext(TopicContext);

    return (
        <div className='lg:w-10/12 mx-auto'>
            <header>
                <h1 className='text-6xl'>Some Header Should be Here</h1>
            </header>
            <div className='grid md:grid-cols-3 lg:grid-cols-4  mx-auto my-10'>
                {
                    topics.map(topic => <SingleTopic key={topic.id} topic={topic}></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default Topic;