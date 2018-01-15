import React from 'react';
import '../../css/Search.css';

export default ({ searchQuery }) => {
	let query;

	return (
		<label className="search-field">
			<input
				type="search"
				name="search"
				placeholder="Search..."
				ref={el => (query = el)}
				onChange={() => searchQuery(query.value)}
			/>
		</label>
	);
};
