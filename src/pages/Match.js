import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../store/matches/matches';
import Game from '../components/game';
import '../styles/home.scss';

const Match = () => {
  const dispatch = useDispatch();
  const fixture = useSelector((state) => state.matches.matches);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <div className="homeContainer">
      <h1>Latest Matches</h1>
      <h4>Please Select a Match</h4>
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
    </div>
  );
};

export default Match;
