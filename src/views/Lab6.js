import React, { Component } from 'react';
import { TextField,Button } from '@material-ui/core';
import Axios from 'axios';

import GithubBox from '../components/GithubBox'

class Lab6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: {},
            username: '',
            errMsg: 'enter username'
        }
    }

    render() {
        const handleSearchBtn = (e) => {
            e.preventDefault();

            const url = 'https://api.github.com/users/' + this.state.username;
            Axios.get(url)
            .then((res) => {
                this.setState({
                    userData: res.data,
                    errMsg: ''
                })
            })
            .catch((error) => {
                this.setState({
                    errMsg: 'profile not found'
                })
            })
        }

        return (
            <div className="bg-za h-full">
                <div>
                    <p className="text-8xl">github profile search</p>
                    <div className="mt-10">
                        <TextField id="outlined-basic" label="username" variant="outlined" onChange={(input) => {
                            this.setState({
                                username: input.target.value
                            });
                        }}/>
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={handleSearchBtn}>search</Button>
                    </div>   
                </div>
                <div className="pb-20">
                    {
                        this.state.errMsg
                        ? <p className="text-4xl">{this.state.errMsg}</p>
                        : <GithubBox userData={this.state.userData}/>
                    }
                </div>
            </div>
        );
    }
}

export default Lab6;