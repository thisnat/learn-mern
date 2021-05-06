import React, { Component } from 'react';
import axios from 'axios';

class Lab extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                data:res.data
            });
        })
    }

    render() {
        const {data} = this.state; 

        return (
            <div className="px-10 py-10 bg-blue-500">
               {
                   data.map((data,i) => (
                       <div key={i} className="bg-white px-10 py-10 my-5 mx-32 rounded-xl shadow-lg">
                           {
                               data.id % 2 === 0 ? <h1 className="text-2xl font-bold mb-3">✨ {data.title}</h1> : <h1 className="text-2xl font-bold mb-3">{data.title}</h1>
                           }
                           <span className="mr-3 bg-yellow-400 py-1 px-2 rounded-md text-base text-white">id : {data.id}</span>
                           <span className="bg-purple-400 py-1 px-2 rounded-md text-base text-white">user : {data.userId}</span>
                           <br/>
                           <p className="mt-3">{data.body}</p>
                       </div>
                   ))
               }
            </div>
        );
    }
}

export default Lab;