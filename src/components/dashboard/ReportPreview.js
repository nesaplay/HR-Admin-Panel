import React from 'react';
import '../../css/ReportPreview.css';

const ReportPreview = ({
	companyName,
	candidateName,
	interviewDate,
	status,
	initModal,
	handleDelete,
	phase,
	note,
	id
}) => {
	const date = new Date(interviewDate).toLocaleDateString();
	initModal(this);

	const content = `
    <div class='reports-modal'>
        <p class='reports-modal-name'>${candidateName}</p>
            <div class='reports-modal-info'>
             <article>
                <span>Company</span>
                <p>${companyName}</p>
             </article>
             <article>
                <span>Interview Date</span>
                <p>${date}</p>
             </article>
             <article>
                <span>Phase</span>
                <p>${phase}</p>
             </article>
             <article>
                <span>Status</span>
                <p>${status}</p>
             </article>
             </div>
            <div class='reports-modal-notes'>
                <span>Notes</span>
                <p>${note}</p>
            </div>
    </div>
`;
	const openModal = () => {
		const instance = new this.Modal({ content });
		instance.open();
	};

	const deleteInit = () => handleDelete(id);

	return (
		<article className="report-preview-container">
			<div>{companyName}</div>
			<div>{candidateName}</div>
			<div className="report-preview-inner">
				<div>{date}</div>
				<div>{status}</div>
				<div className="preview-icons">
					<div className="preview-modal" onClick={openModal}>
						O
					</div>
					<div className="preview-delete" onClick={deleteInit}>
						X
					</div>
				</div>
			</div>
		</article>
	);
};

export default ReportPreview;
