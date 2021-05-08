import React from 'react';

const TodoItem = ({ title,todo,index }) => {
    return (
        <div className="px-10 py-10 mt-3 shadow-lg">
            <p className="text-4xl font-bold">{title}</p>
            <p className="mt-3 text-xl">{todo}</p>
            <p className="mt-3 text-xl">{index}</p>
        </div>
    );
};

export default TodoItem;