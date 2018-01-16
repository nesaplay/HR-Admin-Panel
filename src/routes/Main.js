import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Wizzard from './containers/Wizzard';
import Error404 from '../components/common/Error404';
import '../css/Main.css';

class Main extends Component {
	render() {
		return (
			<main className='main-wrapper'>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/wizzard" component={Wizzard} />
					<Route path="*" component={Error404} />
				</Switch>
			</main>
		);
	}
}

export default Main;
