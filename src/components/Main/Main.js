import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const TopicContext = createContext([])

const Main = () => {
    const data = useLoaderData();
    const topics = data.data;
    console.log(topics);

    return (
        <TopicContext.Provider value={[topics]}>
            <div>
                <Header></Header>
                <Outlet className='mx-auto'></Outlet>
            </div>
        </TopicContext.Provider>
    );
};

export default Main;