import React from 'react';
import { IMG_PLACEHOLDER } from '../../constants';

export default ({
	data,
	error,
	isLoading,
	idClicked,
	isSelected,
	selectedUser,
	query
}) => {
	const renderUsers = () => {
		const filter = report =>
			report.name.toLowerCase().includes(query.toLowerCase());

		return data
			.filter(filter)
			.map(user => (
				<li
					key={user.id}
					onClick={() => idClicked(user)}
					className={
						isSelected && selectedUser === user.id ? 'active' : ''
					}
				>
					<div className="list-item-wrapper">
						<div>
							<img
								src={user.avatar ? user.avatar : IMG_PLACEHOLDER}
								alt="profile-icon"
							/>
						</div>
						<div>
							<p className="profile-name">{user.name}</p>
							<p className="profile-email">{user.email}</p>
						</div>
					</div>
				</li>
		));
	};

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<ul className="wizzard-content-list">{renderUsers()}</ul>
	);
};
