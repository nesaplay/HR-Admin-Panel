import React, { Component } from 'react';

import UserList from '../components/wizzard/UserList';
import CompanyList from '../components/wizzard/CompanyList';
import FillReport from '../components/wizzard/FillReport';
import WizzardNav from '../components/wizzard/WizzardNav';

class Wizzard extends Component {
	render() {
		return [
			<WizzardNav />,
			<div>
				<UserList />
				<CompanyList />
				<FillReport />
			</div>
		];
	}
}

export default Wizzard;
