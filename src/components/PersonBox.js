import React from 'react';

const Personbox = ({data}) => {

    const haveUsername = (username) => {
        if(username === undefined || username.length === 0){
            return false;
        }else{
            return true;
        }
    }

    return (
        <div className="bg-white mx-48 mb-5 p-10 shadow-lg">
            <p className="text-5xl">{data.name}</p>
            {
                haveUsername(data.username)
                ? <p className="text-4xl">{data.username}</p>
                : <p className="text-4xl italic">no username kub</p>
            }
        </div>
    );
};

export default Personbox;