import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

export const CorrectContex = createContext([]);
export const WrongContext = createContext([]);
const Quiz = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    return (
        <WrongContext.Provider value={[wrongCount, setWrongCount]}>
            <CorrectContex.Provider value={[correctCount, setCorrectCount]}>
                <div className='mx-auto'>
                    <div className='grid w-11/12 mx-auto md:grid-cols-4'>
                        <div className='mt-6 md:col-span-3 mx-auto'>
                            <h1 className='text-3xl font-semibold text-gray-600 mb-10'>Quiz of {name}</h1>
                            {
                                questions.map((question, index) => <SingleQuiz key={question.id} quiz={question} index={index} ></SingleQuiz>)
                            }
                        </div>
                        <div className='shadow-lg ml-5 mt-24 h-fit py-4 px-2 rounded'>
                            <h1 className='font-bold text-3xl text-green-400'>Result Section</h1>
                            <h1 className='text-gray-600 font-bold mt-6 text-lg'>Correct Answer: {correctCount}</h1>
                            <h1 className='text-gray-600 font-bold mt-6 text-lg'>Wrong Attempts: {wrongCount}</h1>
                            <h1 className='text-gray-600 font-bold mt-6 text-lg'>Total Attempts: {correctCount + wrongCount}</h1>
                        </div>
                    </div>
                </div>
            </CorrectContex.Provider>
        </WrongContext.Provider >
    );
};

export default Quiz;