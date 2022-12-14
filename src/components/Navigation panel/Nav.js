import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import {
  AiFillLinkedin, AiOutlineTwitter, AiFillYoutube, AiFillFacebook,
} from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import Details from '../pages/Details';
import Match from '../pages/Match';
// import MyReservations from '../pages/MyReservations';
import './styles/navbar.scss';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <button className="button" type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <nav className={`navbar ${navbarOpen ? ' showMenu' : ''}`}>
        <img
          src="https://img.freepik.com/premium-photo/close-up-football-action-scene-with-competing-soccer-players-stadium_207634-5551.jpg?w=826"
          alt="logo"
        />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => closeMenu()}
        >
          Matches
        </NavLink>
        <NavLink
          to="/Tickets"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => closeMenu()}
        >
          Ticket
        </NavLink>
        <NavLink
          to="/myreservations"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => closeMenu()}
        >
          Reservations
        </NavLink>

        <ul className="nav-links">
          <li className="nav-link"><AiFillLinkedin /></li>
          <li className="nav-link"><AiOutlineTwitter /></li>
          <li className="nav-link"><AiFillYoutube /></li>
          <li className="nav-link"><BsGithub /></li>
          <li className="nav-link"><AiFillFacebook /></li>
        </ul>
        <div className="copy">Microverse Copyright 2022</div>
      </nav>
      <Routes>
        <Route path="/" element={<Match />} />
        <Route path="matches/:id" element={<Details />} />
        {/* <Route path="/myreservations" element={<MyReservations />} /> */}
      </Routes>
    </>
  );
}

export default Nav;
