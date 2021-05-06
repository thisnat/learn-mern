import React, { Component } from 'react';
import axios from 'axios';

class Lab4 extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api')
        .then(res => {
            this.setState({
                data:res.data
            });
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                {data.map((data,i) => (
                    <div key={i}>
                        <li>{data.name}</li>
                    </div>
                ))}
            </div>
        );
    }
}

export default Lab4;