import React, { Component } from 'react';
import axios from 'axios';

import CommentBox from '../components/CommentBox';

class Lab2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            this.setState({
                data:res.data
            });
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="px-10 py-10 bg-purple-500">
                {data.map((data,i) => (
                    <div key={i}>
                        <CommentBox data={data}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Lab2;