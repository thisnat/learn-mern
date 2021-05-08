import React,{ useState } from 'react';
import Swal from 'sweetalert2';

const TodoAdd = ({ addToDoItem }) => {
    let [todoItem,setToDoItem] = useState([]);
    
    const handleAddBtn = (e) => {
        e.preventDefault();

        if(todoItem.title === undefined || todoItem.todo === undefined){
            Swal.fire(
                'กรอกข้อมูลให้ครบครับพี่',
                '',
                'question'
            )
        }
        else if (todoItem.title.length === 0 || todoItem.todo.length === 0){
            Swal.fire(
                'กรอกข้อมูลให้ครบครับพี่',
                '',
                'question'
            )
        }
        else {
            addToDoItem(todoItem);
        }
    }

    return (
        <div className="px-10 py-10 mt-5 bg-pink-200 text-2xl">
            <input type="text" placeholder="title" onChange={(e) => {
                setToDoItem({...todoItem , title:e.target.value});
            }}/>
            <br />
            <input type="text" placeholder="to do" className="mt-3" onChange={(e) => {
                setToDoItem({...todoItem , todo:e.target.value});
            }}/>
            <br />
            <button onClick={handleAddBtn} className="mt-3 px-5 py-2 bg-green-500 text-white">add</button>
        </div>
    );
};

export default TodoAdd;