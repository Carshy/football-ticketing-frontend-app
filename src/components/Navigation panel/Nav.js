import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Match from '../pages/Match';
// import MyReservations from '../pages/MyReservations';
import './styles/navbar.scss';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <img
          src="https://img.freepik.com/premium-photo/close-up-football-action-scene-with-competing-soccer-players-stadium_207634-5551.jpg?w=826"
          alt="logo"
        />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Matches
        </NavLink>
        <NavLink
          to="/myreservations"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Tickets
        </NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Match />} />
        {/* <Route path="/myreservations" element={<MyReservations />} /> */}
      </Routes>
    </>
  );
}

export default Nav;
