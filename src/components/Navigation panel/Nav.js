import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import {
  AiFillLinkedin, AiOutlineTwitter, AiFillYoutube, AiFillFacebook,
} from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import Details from '../pages/Details';
import Match from '../pages/Match';
import AddMatch from '../pages/add_match';
import TicketList from '../TicketList';
import Reservation from '../ReservationForm';
import './styles/navbar.scss';
import Register from '../pages/Register';
import Delete from '../pages/Delete';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('You have been logged out');
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <>
      <Toaster />
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
          to="/add_match"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => closeMenu()}
        >
          Add Match
        </NavLink>
        <NavLink
          to="/delete_match"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={() => closeMenu()}
        >
          Delete Match
        </NavLink>
        <NavLink
          to="/TicketList"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Tickets
        </NavLink>
        <NavLink
          to="/ReservationForm"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Book Reservation
        </NavLink>

        <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
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
        <Route path="/register" element={<Register />} />
        <Route path="matches/:id" element={<Details />} />
        <Route path="/add_match" element={<AddMatch />} />
        <Route path="/delete_match" element={<Delete />} />
        <Route path="/TicketList" element={<TicketList />} />
        <Route path="/ReservationForm" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default Nav;
