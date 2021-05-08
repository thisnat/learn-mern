import React from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoItem from '../components/TodoItem';

const Lab5 = () => {
    const [todoList,setTodolist] = React.useState([{ title:"default",todo:"this is default to do list" }]);  

    const addToDoItem = ({title,todo}) => {
        const newTodo = [...todoList, { title,todo }];
        setTodolist(newTodo);
    }

    return (
        <div className="px-10 py-10" id="za">
            <p className="text-4xl">yay!@</p>
            <p className="text-4xl">the coolest to do list ever!!1!!11!</p>
            <TodoAdd addToDoItem={addToDoItem}/>
            {
                todoList.map((data,i) => (<TodoItem key={i} title={data.title} todo={data.todo} index={i}/>))
            }
        </div>
    );
};

export default Lab5;