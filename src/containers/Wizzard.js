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

	initWizzard() {
		const { fetchUsers, fetchCompanies, resetWizzard } = this.props;

		resetWizzard();
		fetchUsers();
		fetchCompanies();
	}

	buttonStatus() {
		const { stage, users, companies } = this.props.wizzard;
		const activeUser = users.isSelected;
		const activeCompany = companies.isSelected;

		if (stage === 1 && activeUser) {
			return true;
		}
		if (stage === 2 && activeCompany) {
			return true;
		}

		return false;
	}

	componentDidMount() {
		this.initWizzard();
	}

	render() {
		const { search,
				stageUp, 
				wizzard, 
				searching, 
				stageDown, 
				userSelected, 
				companySelected, 
			} = this.props;
		const { stage, users, companies } = wizzard;

		return (
			<div className="wizzard-wrapper">
				<div className="wizzard-nav">
					<WizzardNav stage={stage} />
				</div>
				<div className="wizzard-content">
					{stage && stage !== 3 && <Search searchQueryHandler={searching} />}
					{stage && stage === 1 && <UserList {...users} {...search} idClicked={id => userSelected(id)} />}
					{stage && stage === 2 && <CompanyList {...companies} {...search} idClicked={id => companySelected(id)} />}
					{stage && stage === 3 && <FillReport {...wizzard} />}
					<div className='wizzard-content-nav'>
						<button 
							disabled={stage && stage === 1 ? 'disabled' : ''} 
							onClick={stageDown}>
								back
						</button>
						<button 
							disabled={this.buttonStatus() ? '' : 'disabled'} 
							className={stage && stage === 3 ? 'hide' : ''}
							onClick={stageUp}>
								next
						</button>
						<button 
							className={stage && stage !== 3 ? 'hide' : ''} 
							onClick={stageUp}>
							submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ wizzard, search }) => ({ wizzard, search });

export default connect(mapStateToProps, actions)(Wizzard);
