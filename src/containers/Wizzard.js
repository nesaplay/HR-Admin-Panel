import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../components/wizzard/UserList';
import CompanyList from '../components/wizzard/CompanyList';
import FillReport from '../components/wizzard/FillReport';
import WizzardNav from '../components/wizzard/WizzardNav';
import Search from '../components/common/Search';
import * as actions from '../actions/index';

import '../css/Wizzard.css';

class Wizzard extends Component {
	constructor(props) {
		super(props);
		this.userClicked = this.userClicked.bind(this);
		this.companyClicked = this.companyClicked.bind(this);
		this.buttonStatus = this.buttonStatus.bind(this);
	}

	buttonStatus() {
		const { stage, users, companies, reports } = this.props.wizzard;
		const activeUser = users.isSelected;
		const activeCompany = companies.isSelected;

		if (stage === 1 && activeUser) {
			return true;
		}
		if (stage === 2 && activeCompany) {
			return true;
		}
		if (stage === 3) {
			return false
		}

		return false;

	}
	
	userClicked(id) {
		this.props.userSelected(id);
	}

	companyClicked(id) {
		this.props.companySelected(id);
	}

	componentDidMount() {
		const { fetchUsers, fetchCompanies } = this.props;
		fetchUsers();
		fetchCompanies();
	}

	render() {
		const { stage, users, companies } = this.props.wizzard;
		const { stageUp, stageDown, wizzard } = this.props;
		return (
			<div className="wizzard-wrapper">
				<div className="wizzard-nav">
					<WizzardNav stage={stage} />
				</div>
				<div className="wizzard-content">
					{stage && stage !== 3 ? <Search /> : ''}
					{stage && stage === 1 ? <UserList {...users} idClicked={this.userClicked} /> : ''}
					{stage && stage === 2 ? <CompanyList {...companies} idClicked={this.companyClicked} /> : ''}
					{stage && stage === 3 ? <FillReport {...wizzard} /> : ''}
					<div className='wizzard-content-nav'>
						<button disabled={stage & stage === 1 ? 'disabled' : ''} onClick={stageDown}>back</button>
						<button disabled={this.buttonStatus() ? '' : 'disabled'} onClick={stageUp}>next</button>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ wizzard }) => ({ wizzard });

export default connect(mapStateToProps, actions)(Wizzard);
