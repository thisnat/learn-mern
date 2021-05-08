import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Lab from './views/Lab';
import Lab2 from './views/Lab2';
import Lab3 from './views/Lab3';
import Lab4 from './views/Lab4';
import Lab4Edit from './views/Lab4edit';
import Lab5 from './views/Lab5'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/lab1" component={Lab} />
                        <Route path="/lab2" component={Lab2} />
                        <Route path="/lab3" component={Lab3} />
                        <Route exact path="/lab4" component={Lab4} />
                        <Route path="/lab4/edit/:id" component={Lab4Edit} />
                        <Route path="/lab5" component={Lab5} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;