import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizzesData = useLoaderData();
    console.log(quizzesData.data.questions
    );
    const quizzes = quizzesData.data.questions;
    return (
        <div>
            <h1>{quizzes.length}</h1>
        </div>
    );
};

export default Quiz;