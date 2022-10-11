import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { CorrectContex, WrongContext } from '../Quiz/Quiz';

const Options = ({ option, index, correctAnswer }) => {
    const [correctCount, setCorrectCount] = useContext(CorrectContex);
    const [wrongCount, setWrongCount] = useContext(WrongContext);
    const [quiz, setQuiz] = useState([]);
    const handleOption = (option) => {
        if (option === correctAnswer) {
            const exists = quiz.find(qs => qs === option);
            if (exists) {
                toast("you alreay select this answer")
            }
            else {
                const newQuiz = [...quiz, option];
                setQuiz(newQuiz)
                setCorrectCount(correctCount + 1);
                toast('Great! You select the right answer', {
                    position: "top-center",
                    autoClose: 5000,
                    type: "success",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        else {
            const exists = quiz.find(qs => qs === option);
            if (exists) {
                toast("you alreay select this answer")
            }
            else {
                const newQuiz = [...quiz, option];
                setQuiz(newQuiz)
                setWrongCount(wrongCount + 1);
                toast('Opps! Your answer is wrong.', {
                    position: "top-center",
                    autoClose: 5000,
                    type: "error",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }

    }
    return (
        <div className='m-1 text-gray-600 p-1 bg-slate-50 rounded shadow' >
            <label className='w-full' >  <input onClick={() => handleOption(option)} type="radio" name="same" id="" /> {option} </label>

        </div>
    );
};

export default Options;