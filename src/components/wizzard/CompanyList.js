import React from 'react';

export default ({
	data,
	error,
	isLoading,
	idClicked,
	isSelected,
	selectedCompany,
	query
}) => {
	const renderCompanies = () => {
		const filter = report =>
			report.name.toLowerCase().includes(query.toLowerCase());

		return data
			.filter(filter)
			.map(company => (
				<li
					key={company.id}
					onClick={() => idClicked(company)}
					className={[
						'companies',
						isSelected && selectedCompany === company.id ? 'active' : ''
					].join(' ')}
				>
					<div className="company-wrapper">
						<p className="profile-name">{company.name}</p>
					</div>
				</li>
		));
	};

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<ul className="wizzard-content-list">{renderCompanies()}</ul>
	);
};
