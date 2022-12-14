import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { userTicket } from '../redux/tickets/tickets';
import { fetchMatches } from '../redux/matches/matches';
import circle from '../assets/circle.svg';
import '../styles/reservation.scss';

function Reservation() {
  const [city, setCity] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [matchId, setMatchId] = useState('');

  const matches = useSelector((state) => state.matches.matches);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const getTarget = e.target;
    const inputValue = getTarget.value;
    switch (getTarget.name) {
      case 'city':
        setCity(inputValue);
        return city;
      case 'matchTime':
        setMatchTime(inputValue);
        return matchTime;
      case 'matchId':
        setMatchId(inputValue);
        return matchId;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const formTarget = e.target;
    e.preventDefault();
    formTarget.reset();
    dispatch(userTicket(city, matchTime, matchId));
    setCity('');
    setMatchTime('');
    setMatchId('');
    setTimeout(() => { navigate('/tickets'); }, 1000);
  };

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <div className="form-field">
      <h3 className="reservation-title">Book your Reservation</h3>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__reservation-form"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="city" id="city" value={city} placeholder="Enter City" onChange={handleChange} required />
          </div>
          <div>
            <input type="datetime-local" id="datetime" value={matchTime} name="datetime" onChange={handleChange} required />
          </div>
          <select id="match" name="matchId" value={matchId} onChange={handleChange}>
            <option value="">Select your Match...</option>
            {matches.map((match) => (
              <option key={match.id} value={match.id}>
                {match.match_id}
              </option>
            ))}
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
