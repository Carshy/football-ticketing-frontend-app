import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../store/matches/matches';

const Match = () => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches.matches);
  console.log(matches);
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <div>
      {/* {(matches) ? matches.map(match =>{
      <p key={match.id}>{match.away_team}</p>
     })
    :
    <p>None</p>
    } */}
    </div>

  );
};

export default Match;
