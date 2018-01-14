import React from 'react';
import '../css/ReportPreview.css';

const ReportPreview = props => {
    const { companyName, candidateName, interviewDate, status } = props;
    const date = new Date(props.interviewDate).toLocaleDateString();

    return (
        <article className='report-preview-container'>
            <div>{companyName}</div>
            <div>{candidateName}</div>
            <div className='report-preview-inner'>
                <div>{date}</div>
                <div>{status}</div>
                <div>EYE X</div>
            </div>
        </article>
    );
};

export default ReportPreview;