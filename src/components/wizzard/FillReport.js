import React from 'react';

import { REPORT_PHASES, REPORT_STATUSES } from '../../constants';

export default ({ report, onError, submitForm }) => {
	let date, status, phase, note;

	function validateForm(e) {
		e.preventDefault();

		let currentDate = new Date().getTime();
		let reportDate = new Date(date.value).getTime();

		if(!reportDate) {
			onError({ date: "Date is required"})
			return;
		}

		if (currentDate < reportDate) {
			onError({ date: "Date can't be in the future" })
			return;
		}

		if (!note.value) {
			onError({ note: "Note is required" })
			return;
		}

		const details = {
			interviewDate: date.value,
			status: status.value,
			phase: phase.value,
			note: note.value
		};

		submitForm(details);
	}

	return (
		<form onSubmit={validateForm} className="wizzard-content-form">
			<label className="form-item">
				<span>Date:</span>
				<input type="date" name="date" ref={el => (date = el)} />
				{ report.date && <span className="error-field">{report.date}</span>}
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
				{ report.note && <span className="error-field">{report.note}</span>}
			</label>
			<div className="submit-container">
				<button type="submit">submit</button>
			</div>
		</form>
	);
};
