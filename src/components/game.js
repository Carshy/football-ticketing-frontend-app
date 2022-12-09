import React from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const {
    id, hometeam, awayteam, location, stadium, price, photo, date,
  } = props;

  const fixture = `${hometeam} vs ${awayteam}`;
  const place = `${stadium}, ${location}`;

  return (
    <div
      id={id}
      className="gameDiv"
    >
      <img
        src={photo}
        alt="stadium"
        className="gamePic"
      />
      <p>{fixture}</p>
      <p>{place}</p>
      <p>{date}</p>
      <p>
        $
        {price}
      </p>
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
