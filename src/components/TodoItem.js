import React,{ useState } from 'react';

const TodoItem = ({ title,todo,index}) => {

    //component will re-render when state update
    let [isDone,setIsDone] = useState(false);

    const handleDoneButton = (e) => {
        e.preventDefault();

        setIsDone(true);
    }

    return (
        <div className="px-10 py-10 mt-3 shadow-lg">
            {
                isDone
                ? <span className="px-5 py-2 text-white float-right bg-green-500">done</span>
                : <span className="px-5 py-2 text-white float-right bg-yellow-500">wait</span>
            }
            <p className="text-4xl font-bold">{title}</p>
            <p className="mt-3 text-xl">{todo}</p>
            <p className="mt-3 text-xl">id : {index}</p>
            <button disabled={isDone} className="disabled:opacity-50 mt-3 px-5 py-2 bg-green-600 text-white" onClick={handleDoneButton}>done</button>
        </div>
    );
};

export default TodoItem;