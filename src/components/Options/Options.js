import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CorrectContex, WrongContext } from '../Quiz/Quiz';

const Options = ({ option, index, correctAnswer }) => {
    const [correctCount, setCorrectCount] = useContext(CorrectContex);
    const [wrongCount, setWrongCount] = useContext(WrongContext);
    const handleOption = () => {
        if (option === correctAnswer) {
            setCorrectCount(correctCount + 1)
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
        else {
            setWrongCount(wrongCount + 1)
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
    return (
        <div>
            <button onClick={handleOption} className=' w-full bg-gray-50 m-1 text-gray-600 p-1 rounded shadow' >  <p>({index + 1}) {option}</p> </button>

        </div>
    );
};

export default Options;