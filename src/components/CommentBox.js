import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: props.data
        }
    }

    render() {
        const {data} = this.state;

        return (
            <div className="bg-white mx-48 mb-5 p-10 rounded-xl shadow-lg">
                {
                    data.id % 2 === 0
                    ? <p className="mb-3 text-4xl font-bold">❤️ {data.name}<span className="py-1 px-2 bg-green-600 text-white rounded-lg float-right text-base">{data.id}</span></p>
                    : <p className="mb-3 text-4xl font-bold">{data.name}<span className="py-1 px-2 bg-green-600 text-white rounded-lg float-right text-base">{data.id}</span></p> 
                }
                <p className="mt-3 text-lg">📧 <span className="italic">{data.email}</span></p>
                <p className="mt-3">{data.body}</p>
            </div>
        );
    }
}

export default CommentBox;