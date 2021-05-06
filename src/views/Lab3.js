import React, { Component } from 'react';
import axios from 'axios';

import FanboiComment from '../components/FanboiComment'

class Lab3 extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            topic:[]
        }
    }

    //topic id 12934

    componentDidMount(){
        //get posts
        axios.get('https://fanboi.ch/api/1.0/topics/12934/posts/')
        .then(res => {
            this.setState({
                data:res.data
            });
        });

        //get topic
        axios.get('https://fanboi.ch/api/1.0/topics/12934/')
        .then(res => {
            this.setState({
                topic:res.data
            });
        })
    }

    render() {
        const {data,topic} = this.state;

        return (
            <div className="px-10 py-10 bg-gradient-to-r from-red-400 to-pink-500">
                <div className="bg-white mx-48 mb-5 p-10 rounded-xl shadow-lg">
                    <p className="text-xl font-bold">💫 {topic.title}</p>
                </div>
                {data.map((data,i) => (
                    <div key={i}>
                        <FanboiComment data={data}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Lab3;