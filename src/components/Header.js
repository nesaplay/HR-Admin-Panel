import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <nav className='nav-wrapper'>
                <span>Reports Administration</span>
                <div>
                    <button>Reports</button>
                    <button>Create Report</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;