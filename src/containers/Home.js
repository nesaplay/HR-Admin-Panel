import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportPreview from '../components/dashboard/ReportPreview';
import Search from '../components/common/Search';
import initModal from '../components/common/Modal';
import * as actions from '../actions/index';
import '../css/Home.css';

class Home extends Component {

	renderReports(data) {
		const { deleteReport, search } = this.props;
		const { query } = search;

		const filter = report =>
			report.candidateName.toLowerCase().includes(query.toLowerCase());

		return data
			.filter(filter)
			.map(report => 
				<ReportPreview 
					key={report.id}
					handleDelete={deleteReport}
					initModal={initModal} 
					{...report}
				/>);
	}

	componentDidMount() {
		this.props.fetchReports();
	}

	render() {
		const { searching, reports } = this.props;
		const { isLoading, data } = reports;
		return (
			<div className="candidates-list-wrapper">
				<Search searchQueryHandler={searching} />
				{isLoading ? <div className="loader"/> : this.renderReports(data)}
			</div>
		);
	}
}

const mapStateToProps = ({ reports, search }) => ({ reports, search });

export default connect(mapStateToProps, actions)(Home);
