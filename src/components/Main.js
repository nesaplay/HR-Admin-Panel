import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Error404 from './Error404';

class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="*" component={Error404} />
			</Switch>
		);
	}
}

export default Main;
