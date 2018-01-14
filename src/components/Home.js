import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Home extends Component {
    render() {
        return (
            <div onClick={this.props.testAction}>
                Welcome Home
            </div>
        );
    }
}

export default connect(null, actions)(Home);
