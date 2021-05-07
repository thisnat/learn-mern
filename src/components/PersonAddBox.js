import React,{ useState } from 'react';
import axios from 'axios';

const PersonAddBox = () => {
    let [name,setName] = useState("");
    let [username,setUsername] = useState("");

    const handleAddBtn = (event) => {
        event.preventDefault();
        console.log(`name : ${name} username : ${username}`);

        if (name.length === 0){
            window.alert("plz enter name dumb!");
        }else{
            axios.post('http://localhost:3001/api/add',{name:name,username: username})
            .then((res) => {
                window.location.href = 'http://localhost:3000/lab4';
            });
        }
    }

    return (
        <div className="bg-white mx-48 mb-5 p-10 shadow-lg">
            <p className="mb-5 font-thai text-4xl">mongodb crud น่ะครับๆๆๆๆๆ</p>
            <input type="text" 
            className="leading-5 px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="name"
            onChange={(e) => {
                setName(e.target.value);
            }} />

            <br />

            <input type="text" 
            className="mt-5 px-4 py-3 leading-5 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="username"
            onChange={(e) =>{
                setUsername(e.target.value);
            }} />

            <br />

            <button className="mt-5 px-5 py-2 bg-green-600 text-white" onClick={handleAddBtn} >add</button>
            <p className="mt-3 font-thai text-xl">*** username ไม่ต้องใส่ก็ได้ไอ่ควาย ***</p>
        </div>
    );
};

export default PersonAddBox;