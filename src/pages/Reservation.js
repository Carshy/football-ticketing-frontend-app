import React from 'react';
import { motion } from 'framer-motion';
import circle from '../assets/circle.svg';
import '../styles/reservation.scss';

function Reservation() {
  return (
    <div className="form-field">
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__reservation-form"
      >
        <form>
          <div>
            <input name="city" placeholder="Enter City" required />
          </div>
          <div>
            <input name="date" placeholder="Match Date" required />
          </div>
          <select name="framework">
            <option value="">I am interesting in...</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
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
