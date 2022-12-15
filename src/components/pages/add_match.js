import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import './styles/add-match.scss';

const AddMatch = () => {
  const [stadium, setStadium] = useState('');
  const [location, setLocation] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserId(user.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/matches', {
        method: 'POST',
        body: JSON.stringify({
          stadium,
          location,
          home_team: homeTeam,
          away_team: awayTeam,
          price,
          date,
          photo,
          user_id: userId,
        }),
        headers: {
          'Content-Type': 'application/json, charset=UTF-8',
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.status === 'created') {
        setStadium('');
        setLocation('');
        setHomeTeam('');
        setAwayTeam('');
        setPrice('');
        setDate('');
        setPhoto('');
        setUserId('');
        toast.success('Match created');
      } else {
        toast.error('Match not Created');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <Toaster />
      <div className="add-match">
        <h1>Add a Match</h1>
        <h4>Fill the form to add a Match</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stadium}
          placeholder="Stadium"
          onChange={(e) => setStadium(e.target.value)}
        />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          value={homeTeam}
          placeholder="Home Team"
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          type="text"
          value={awayTeam}
          placeholder="Away Team"
          onChange={(e) => setAwayTeam(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={photo}
          placeholder="Photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="add-match-btn" type="submit">Add Match</button>
      </form>
    </div>
  );
};

export default AddMatch;
