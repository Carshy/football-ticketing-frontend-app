import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../store/matches/matches';
import Game from './game';

const Match = () => {
  const dispatch = useDispatch();
  const fixture = useSelector((state) => state.matches.matches);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <div>
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
  );
};

export default Match;
