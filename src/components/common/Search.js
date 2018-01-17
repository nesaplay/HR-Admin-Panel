import React from 'react';
import '../../css/Search.css';

export default ({ searchQueryHandler }) => {
	let query;
	
	return (
		<label className="search-field">
			<input
				type="search"
				name="search"
				placeholder="Search..."
				ref={el => (query = el)}
				onChange={() => searchQueryHandler(query.value)}
			/>
		</label>
	);
};
