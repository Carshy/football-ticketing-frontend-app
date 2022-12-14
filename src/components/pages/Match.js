import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fetchMatches } from '../../redux/matches/matches';
import './styles/home.scss';
import Game from './game';

const Match = () => {
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const fixture = useSelector((state) => state.matches.matches);
  console.log(fixture);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);
  let scroll = 0;

  const handleLeftClick = () => {
    myRef.current.scrollTo({
      left: scroll -= 200,
      behavior: 'smooth',
    });
  };

  const handleRightClick = () => {
    myRef.current.scrollTo({
      left: scroll += 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="homeContainer">
      <h1>Latest Matches</h1>
      <h4 className="selection-list">Please Select a Match</h4>
      <button aria-label="left-button" type="button" className="scrollLeft" onClick={handleLeftClick}><FaChevronLeft /></button>
      <button aria-label="right-button" type="button" className="scrollRight" onClick={handleRightClick}><FaChevronRight /></button>
      <div className="slider" ref={myRef}>
        {fixture.map((match) => (
          <Game
            key={match.id}
            id={match.id}
            hometeam={match.home_team}
            awayteam={match.away_team}
            date={match.date}
            photo={match.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Match;
