import React,{ useState,useEffect } from 'react';
import axios from 'axios';

const Lab4edit = (props) => {
    let [data,setData] = useState("");
    let [err,setErr] = useState(false);

    let [name,setName] = useState("");
    let [username,setUsername] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/api/id/' + props.match.params.id)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setErr(true);
        });
    },[props.match.params.id]);

    const handleEditBtn = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/api/id/' + props.match.params.id,{name:name,username:username})
        .then((res) => {
            window.location.href = 'http://localhost:3000/lab4';
        });
    }

    return (
        <div>
            {
                err
                ? <p className="text-7xl">error (id not found)</p>
                : <div className="text-6xl m-10">
                    <p>id : {props.match.params.id}</p>
                    <p>name : {data.name}</p>
                    <p>username : {data.username}</p>
                    <hr className="my-5" />
                    <input type="text" className="border" placeholder={data.name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                    <br />
                    <input type="text" className="mt-5 border" placeholder={data.username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}/>
                    <br />
                    <button className="mt-5 px-5 py-2 bg-green-600 text-white"
                    onClick={handleEditBtn}>edit</button>
                    <button className="ml-3 px-5 py-2 bg-red-600 text-white"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "http://localhost:3000/lab4";
                    }}>ยกเลิก</button>
                </div>
            }
        </div>
    );
};

export default Lab4edit;