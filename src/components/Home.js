import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import ReportPreview from './ReportPreview';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	renderReports(data) {
		return data.map(report => <ReportPreview key={report.id} {...report} />);
	}

	componentDidMount() {
		this.props.fetchReports();
	}

	render() {
		const { isLoading, data } = this.props.reports;

		return (
			<div>
				{isLoading ? <p>Loading ...</p> : this.renderReports(data)}
			</div>
		);
	}
}

const mapStateToProps = ({ reports }) => ({ reports });

export default connect(mapStateToProps, actions)(Home);
