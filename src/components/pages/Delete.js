import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMatches } from '../../redux/matches/matches';
import './styles/home.scss';
import Game from './game';

function Delete() {
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

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/v1/matches/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.values(data).includes('Match has been deleted')) {
          toast.success('Match Deleted');
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        } else {
          toast.error('Error');
        }
      });
  };

  return (
    <div className="homeContainer">
      <Toaster />
      <h1>Delete Matches</h1>
      <h4 className="selection-list">Click the Delete button to Delete a Match</h4>
      <button aria-label="left-button" type="button" className="scrollLeft" onClick={handleLeftClick}><FaChevronLeft /></button>
      <button aria-label="right-button" type="button" className="scrollRight" onClick={handleRightClick}><FaChevronRight /></button>
      <div className="slider" ref={myRef}>
        {fixture.map((match) => (
          <div
            key={match.id}
          >
            <Game
              id={match.id}
              hometeam={match.home_team}
              awayteam={match.away_team}
              date={match.date}
              photo={match.photo}
            />
            <button type="button" className="delete-btn" onClick={() => handleDelete(match.id)}>Delete Match</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Delete;
