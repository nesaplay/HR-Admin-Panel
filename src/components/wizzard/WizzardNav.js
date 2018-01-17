import React from 'react';

import '../../css/WizzardNav.css';

export default ({ stage, user, company }) => {
    return [
            <ul className='wizzard-nav-list' key={1}>
                <li className={stage && stage === 1 ? 'active' : ''}>▶ Select Candidate</li>
                <li className={stage && stage === 2 ? 'active' : ''}>▶ Select Company</li>
                <li className={stage && stage === 3 ? 'active' : ''}>▶ Fill Report Details</li>
            </ul>,
            <ul className='wizzard-nav-list' key={2}>
                {user && <li>
                    <span>Candidate: </span>
                    <div>{user.name}</div>
                </li>}
                {company && <li>
                    <span>Company: </span>
                    <div>{company.name}</div>
                </li>}
            </ul>
    ];
};