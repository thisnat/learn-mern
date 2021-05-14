import React from 'react';

const GithubBox = ({ userData }) => {
    return (
        <div>
            <div className="text-4xl">
                <img src={userData.avatar_url} alt="profile pic" />
                <p>{userData.login}</p>
                <p>followers : {userData.followers}</p>
                <p>following : {userData.following}</p>
                <p>repos : {userData.public_repos}</p>
            </div>
        </div>
    );
};

export default GithubBox;