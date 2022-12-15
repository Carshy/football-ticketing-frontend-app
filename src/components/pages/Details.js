import React from 'react';
import { useParams } from 'react-router-dom/';
import { useSelector } from 'react-redux';
import Detail from './Detail';
import './styles/details.scss';

const Details = () => {
  const { id } = useParams();
  const matches = useSelector((state) => state.matches.matches);
  const matchDetails = matches.filter((match) => match.id.toString() === id);

  return (
    <div>
      {matchDetails.map((match) => (
        <Detail
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
export default Details;
