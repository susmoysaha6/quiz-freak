import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-2xl text-slate-500 font-semibold">Frequently Asked Questions</h1>
            <div className='w-3/4  mx-auto rounded shadow-lg p-6 my-6 text-start'>
                <h1 className="text-xl text-slate-600 font-semibold">1. What is the purpose of react router?</h1>
                <p className="text-lg text-slate-600 font-semibold">Answer: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='w-3/4  mx-auto rounded shadow-lg p-6 my-6 text-start'>
                <h1 className="text-xl text-slate-600 font-semibold">2. How does contex API works?</h1>
                <p className="text-lg text-slate-600 font-semibold">Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management.
                    In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div className='w-3/4  mx-auto rounded shadow-lg p-6 my-6 text-start'>
                <h1 className="text-xl text-slate-600 font-semibold">3. Tell something about useRef? </h1>
                <p className="text-lg text-slate-600 font-semibold">Answer:
                    <li>The useRef Hook allows you to persist values between renders.</li>
                    <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                    <li>It can be used to access a DOM element directly.</li>
                    <li>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;