import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css';

const Header = () => {
	return (
		<header className="header-wrapper">
			<nav className="nav-wrapper">
				<span>Reports Administration</span>
				<div>
					<button>
						<Link to="/">Reports</Link>
					</button>
					<button>
						<Link to="/">Create Report</Link>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
