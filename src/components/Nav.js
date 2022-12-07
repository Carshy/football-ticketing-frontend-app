import React from 'react';
import Match from './Match';
import '../nav.css';

function Nav() {
  return (
    <div className="split">
      <ul>
        <li className="list-item">Matches</li>
        <li className="list-item">Tickets</li>
        <li className="list-item">Reserved</li>
      </ul>
      <Match />
    </div>
  );
}

export default Nav;
