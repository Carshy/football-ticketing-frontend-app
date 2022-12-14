import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { userTicket } from '../redux/tickets/tickets';
import circle from '../assets/circle.svg';
import '../styles/reservation.scss';

function Reservation() {
  const [city, setCity] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [matchId, setMatchId] = useState('');


  return (
    <div className="form-field">
      <h3 className="reservation-title">Book your Reservation</h3>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__reservation-form"
      >
        <form>
          <div>
            <input type="text" name="city" id="city" placeholder="Enter City" required />
          </div>
          <div>
            <input type="datetime-local" id="datetime" name="datetime" required />
          </div>
          <select id="match" name="matchId">
            <option value="">Select your Match...</option>
            {}
          </select>
          <input type="submit" value="Book Now" />
        </form>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
}

export default Reservation;
