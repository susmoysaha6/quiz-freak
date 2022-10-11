import React, { useContext } from 'react';
import { TopicContext } from '../Main/Main';

import SingleTopic from '../SingleTopic/SingleTopic';
import TopBanner from '../TopBanner/TopBanner';

const Topic = () => {
    const [topics] = useContext(TopicContext);

    return (
        <div className='lg:w-10/12 mx-auto'>
            <header>
                <TopBanner></TopBanner>
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