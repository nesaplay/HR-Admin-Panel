import React from 'react';

import '../../css/WizzardNav.css';

export default ({ stage }) => {
    return (
            <ul className='wizzard-nav-list'>
                <li className={stage & stage === 1 ? 'active' : ''}>▶ Select Candidate</li>
                <li className={stage & stage === 2 ? 'active' : ''}>▶ Select Company</li>
                <li className={stage & stage === 3 ? 'active' : ''}>▶ Fill Report Details</li>
            </ul>
    );
};