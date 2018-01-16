import React from 'react';

export default ({
	data,
	error,
	isLoading,
	idClicked,
	isSelected,
	selectedCompany
}) => {
	const renderCompanies = () =>
		data.map(company => (
			<li
				key={company.id}
				onClick={() => idClicked(company.id)}
				className={['companies', 
					isSelected && selectedCompany === company.id ? 'active' : ''
				].join(' ')}
			>
				<div className="company-wrapper">
						<p className="profile-name">{company.name}</p>
				</div>
			</li>
		));

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<ul className="wizzard-content-list">{renderCompanies()}</ul>
	);
};
