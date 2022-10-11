import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Options = ({ option, index, correctAnswer }) => {
    console.log(option);
    const handleOption = () => {
        if (option === correctAnswer) {
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