import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import {
  AiFillLinkedin, AiOutlineTwitter, AiFillYoutube, AiFillFacebook,
} from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import Details from '../pages/Details';
import Match from '../pages/Match';
import AddMatch from '../pages/add_match';
// import MyReservations from '../pages/MyReservations';
import './styles/navbar.scss';
import Register from '../pages/Register';
import Delete from '../pages/Delete';

function Nav() {
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
          to="/add_match"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Add Match
        </NavLink>
        <NavLink
          to="/delete_match"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Delete Match
        </NavLink>

        <button type="button" onClick={handleLogout}>Logout</button>
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
      </Routes>
    </>
  );
}

export default Nav;
