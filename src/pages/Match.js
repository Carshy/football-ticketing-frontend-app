import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../redux/matches/matches';
import Game from '../components/game';
import '../styles/home.scss';

const Match = () => {
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const fixture = useSelector((state) => state.matches.matches);
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
      <h4>Please Select a Match</h4>
      <button type="button" className="scrollLeft" onClick={handleLeftClick}>Left</button>
      <button type="button" className="scrollRight" onClick={handleRightClick}>Right</button>
      <div className="slider" ref={myRef}>
        {fixture.map((match) => (
          <Game
            key={match.id}
            id={match.id}
            hometeam={match.home_team}
            awayteam={match.away_team}
            stadium={match.stadium}
            location={match.location}
            price={match.price}
            date={match.date}
            photo={match.photo}
          />
        ))}
        {fixture.map((match) => (
          <Game
            key={match.id}
            id={match.id}
            hometeam={match.home_team}
            awayteam={match.away_team}
            stadium={match.stadium}
            location={match.location}
            price={match.price}
            date={match.date}
            photo={match.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Match;
