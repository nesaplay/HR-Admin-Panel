import React from 'react';

import { REPORT_PHASES, REPORT_STATUSES } from '../../constants';

export default ({ users, companies, submitForm }) => {
	let date, status, phase, note;
	let report = {};

	function validateForm(e) {
		e.preventDefault();

		let currentDate = new Date().getTime()
		let reportDate = new Date(date.value).getTime();

		if (currentDate < report.date) {
			return false;
		}

		report.interviewDate = date.value;
		report.status = status.value;
		report.phase = phase.value;
		report.note = note.value;


		if (!report.status || !report.phase || !report.note) {
			return false;
		}

		submitForm(report)
	}

	return (
		<form onSubmit={validateForm} className="wizzard-content-form">
			<label className="form-item">
				<span>Date:</span>
				<input type="date" name="date" ref={el => (date = el)} />
			</label>
			<label className="form-item">
				<span>Phase: </span>
				<select name="phase" ref={el => (phase = el)}>
					{REPORT_PHASES.map(elem => (
						<option value={elem} key={elem}>
							{elem}
						</option>
					))}
				</select>
			</label>
			<label className="form-item">
				<span>Status: </span>
				<select name="status" ref={el => (status = el)}>
					{REPORT_STATUSES.map(elem => (
						<option value={elem} key={elem}>
							{elem}
						</option>
					))}
				</select>
			</label>
			<label className="form-item">
				<span>Notes:</span>
				<textarea
					type="text"
					name="notes"
					component="textarea"
					ref={el => (note = el)}
				/>
			</label>
			<div className='submit-container'>
				<button type="submit">submit</button>
			</div>
		</form>
	);
};
