import React from 'react';

export default ({ users, companies, report }) => {
	return (
		<div className='wizzard-content-form'>
			<div>Selected user ID: {users.selectedUser}</div>
            <div>Selected company ID: {companies.selectedCompany}</div>
            <form>Report form goes here</form>
		</div>
	);
};
