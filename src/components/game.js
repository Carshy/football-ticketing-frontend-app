import React from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const {
    id, hometeam, awayteam, location, stadium, price, photo, date,
  } = props;

  return (
    <div id={id}>
      {hometeam}
      {' '}
      vs
      {awayteam}
      at
      {stadium}
      in
      {location}
      for $
      {price}
      on
      {' '}
      {date}
      <img src={photo} alt="da,jd" />
    </div>
  );
};

Game.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  hometeam: PropTypes.string.isRequired,
  awayteam: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stadium: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Game;
