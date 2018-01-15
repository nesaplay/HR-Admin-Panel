import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportPreview from './ReportPreview';
import Search from '../common/Search';
import * as actions from '../../actions/index';
import '../../css/Home.css';

class Home extends Component {
	state = {
		query: ''
	};

	constructor(props) {
		super(props);
		this.searchQuery = this.searchQuery.bind(this);
	}

	searchQuery(query) {
		this.setState({ query });
	}

	renderReports(data) {
		const { query } = this.state;
		const filter = report =>
			report.candidateName.toLowerCase().includes(query.toLowerCase());

		return data
			.filter(filter)
			.map(report => <ReportPreview key={report.id} {...report} />);
	}

	componentDidMount() {
		this.props.fetchReports();
	}

	render() {
		const { isLoading, data } = this.props.reports;

		return (
			<div className="candidates-list-wrapper">
				<Search searchQuery={this.searchQuery} />
				{isLoading ? <p>Loading ...</p> : this.renderReports(data)}
			</div>
		);
	}
}

const mapStateToProps = ({ reports }) => ({ reports });

export default connect(mapStateToProps, actions)(Home);
