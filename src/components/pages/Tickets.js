import React from 'react';
import PropTypes from 'prop-types';

const Tickets = (props) => {
  const { id, date, city } = props;
  return (
    <div id={id} className="ticket-section">
      <h3>{date}</h3>
      <p>{city}</p>
    </div>
  );
};

Tickets.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Tickets;
