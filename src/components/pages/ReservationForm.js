import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userTicket } from '../../redux/tickets/tickets';
import { fetchMatches } from '../../redux/matches/matches';
import circle from './images/circle.svg';
import './styles/reservation.scss';

function ReservationForm() {
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [userId, setUserId] = useState(1);
  const [matchTime, setMatchTime] = useState('');
  const [matchId, setMatchId] = useState('');

  const matches = useSelector((state) => state.matches.matches);
  const quantityOption = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      case 'quantity':
        setQuantity(inputValue);
        return quantity;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const formTarget = e.target;
    e.preventDefault();
    formTarget.reset();
    dispatch(userTicket(city, matchTime, quantity, userId, matchId));
    toast.success('Reservation Created Successful');
    setCity('');
    setQuantity('');
    setUserId('');
    setMatchTime('');
    setMatchId('');
    setTimeout(() => { navigate('/TicketList'); }, 1000);
  };

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <div className="form-field">
      <Toaster />
      <h3 className="reservation-title">Book your Reservation</h3>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="app__reservation-form"
      >
        <form className="reserve-form" onSubmit={handleSubmit}>
          <div className="form-select">
            <select id="city" name="city" value={city} onChange={(e) => { handleChange(e); }}>
              <option value="">Select Game Location...</option>
              {matches.map((match) => (
                <option key={match.id} value={match.location}>
                  {match.location}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select id="datetime" name="matchTime" value={matchTime} onChange={(e) => { handleChange(e); }}>
              <option value="">Select your Game Time...</option>
              {matches.map((match) => (
                <option key={match.id} value={match.date}>
                  {match.date}
                </option>
              ))}
            </select>
          </div>
          <select id="match" name="matchId" value={matchId} onChange={(e) => { handleChange(e); }}>
            <option value="">Select your Match...</option>
            {matches.map((match) => (
              <option key={match.id} value={match.id}>
                {match.home_team}
                {' '}
                vs
                {' '}
                {match.away_team}
              </option>
            ))}
          </select>
          <select id="quantity" name="quantity" value={quantity} onChange={(e) => { handleChange(e); }}>
            <option value="">Ticket Quantity</option>
            {quantityOption.map((match) => (
              <option key={match} value={match}>
                {match}
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

export default ReservationForm;
