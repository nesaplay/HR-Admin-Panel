import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Error404 from './Error404';
import '../css/Main.css';

class Main extends Component {
	render() {
		return (
			<main className='main-wrapper'>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="*" component={Error404} />
				</Switch>
			</main>
		);
	}
}

export default Main;
