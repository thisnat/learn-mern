import React, { Component } from 'react';
import axios from 'axios';

import PersonBox from '../components/PersonBox'
import PersonAddBox from '../components/PersonAddBox'

class Lab4 extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            err:false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api')
        .then(res => {
            this.setState({
                data:res.data
            });
        })
        .catch(err =>{
            this.setState({
                err:true
            });
        })
    }

    render() {
        const {data,err} = this.state;

        return (
            <div className="px-10 py-10 h-full bg-gradient-to-r from-pink-200 to-pink-400">
                <PersonAddBox/>
                
                {
                err === false
                ? data.map((data,i) => (
                    <PersonBox data={data} key={i}/>
                ))
                : <p className="text-4xl">error cant connect mogodb</p>
                }
            </div>
        );
    }
}

export default Lab4;