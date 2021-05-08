import React from 'react';

const Personbox = ({data}) => {

    const haveUsername = (username) => {
        if(username === undefined || username.length === 0){
            return false;
        }else{
            return true;
        }
    }

    const handleEditBtn = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/lab4/edit/' + data._id;
    }

    return (
        <div className="bg-white mx-48 mb-5 p-10 shadow-lg">
            <button className="mt-5 px-5 py-2 bg-green-600 text-white float-right"
            onClick={handleEditBtn}>edit</button>
            <p className="text-5xl">😳 {data.name}</p>
            {
                haveUsername(data.username)
                ? <p className="mt-3 text-4xl">{data.username}</p>
                : <p className="mt-3 text-4xl italic text-gray-400">no username kub</p>
            }
        </div>
    );
};

export default Personbox;