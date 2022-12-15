import React from 'react';
import PropTypes from 'prop-types';
import './styles/ticketlist.scss';
import trophy from './images/trophy.jpg';

const Tickets = (props) => {
  const { id, date, city } = props;
  return (
    <div id={id} className="ticket-section">
      <div className="ticket-header">
        <img className="ticket-image" src={trophy} alt="ticket trophy" />
        <h4>Football Ticket</h4>
      </div>
      <div className="ticket-details">
        <h3>
          Location:
          {' '}
          {city}
        </h3>
        <p>
          Date:
          {' '}
          {date}
        </p>
      </div>
    </div>
  );
};

Tickets.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Tickets;
