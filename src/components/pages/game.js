import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Game = (props) => {
  const {
    id, hometeam, awayteam, photo, date,
  } = props;

  const fixture = `${hometeam} vs ${awayteam}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/matches/${id}`);
  };

  return (
    <div
      id={id}
      className="gameDiv"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="presentation"
    >
      <img
        src={photo}
        alt="stadium"
        className="gamePic"
      />
      <h2>{fixture}</h2>
      <h3>{date}</h3>
    </div>
  );
};

Game.propTypes = {
  id: PropTypes.number.isRequired,
  hometeam: PropTypes.string.isRequired,
  awayteam: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Game;
