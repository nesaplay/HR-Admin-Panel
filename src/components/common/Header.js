import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css';

const Header = () => {
	return (
		<header>
			<div className="header-wrapper">
				<nav className="nav-wrapper">
					<span>Reports Administration</span>
					<div>
						<button>
							<Link to="/">Reports</Link>
						</button>
						<button>
							<Link to="/new">Create Report</Link>
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
