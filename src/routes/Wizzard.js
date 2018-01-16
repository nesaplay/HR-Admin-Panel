import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Wizzard extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/wizzard" />
                <Route path="/wizzard" />
                <Route path="/wizzard" />
            </Switch>
        );
    }
}

export default Wizzard;