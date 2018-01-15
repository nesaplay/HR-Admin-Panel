import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div>
			<h2>Pssst... you shouldnt be here.</h2>
			<p>
				Let me take you back to <Link to="/">Home</Link>.
			</p>
		</div>
	);
};

export default Error404;
