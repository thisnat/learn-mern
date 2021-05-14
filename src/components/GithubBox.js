import React from 'react';

const GithubBox = ({ userData }) => {
    return (
        <div>
            <div className="text-center text-4xl shadow-lg py-10 mx-60 bg-white rounded-lg">
                <img className="mx-auto" src={userData.avatar_url} alt="profile pic" />
                <p>{userData.login}</p>
                <p>followers : {userData.followers}</p>
                <p>following : {userData.following}</p>
                <p>repos : {userData.public_repos}</p>
            </div>
        </div>
    );
};

export default GithubBox;