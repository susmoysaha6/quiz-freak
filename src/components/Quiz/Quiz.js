import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;

    return (
        <div className='mt-6 w-3/4 lg:w-1/2 mx-auto'>
            <h1 className='text-3xl font-semibold text-gray-600 mb-10'>Quiz of {name}</h1>
            {
                questions.map((question, index) => <SingleQuiz key={question.id} quiz={question} index={index}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;