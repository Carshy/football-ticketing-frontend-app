import React, { useState, useEffect } from 'react';

// import { Form, Button } from 'react-bootstrap';
import './styles/match.scss';

const AddMatch = () => {
  const [stadium, setStadium] = useState('');
  const [location, setLocation] = useState('');
  const [home_team, setHomeTeam] = useState('');
  const [away_team, setAwayTeam] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [user_id, setUserId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
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
          home_team,
          away_team,
          price,
          date,
          photo,
          user_id,
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
        setMessage('Match created successfully');
      } else {
        setMessage('Match not created');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-match">
      <form onSubmit={handleSubmit} className="form">
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
          value={home_team}
          placeholder="Home Team"
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          type="text"
          value={away_team}
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
        <button type="submit">Add Match</button>
        <div className="message">
          {message ? <p>{message}</p> : null}
        </div>
      </form>
    </div>
    // <div className="add-match mx-auto gap-5 mb-">
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group controlId="formBasicStadium" className="mb-3">
    //       <Form.Label>Stadium</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Stadium" value={stadium} onChange={(e) => setStadium(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicLocation" className="mb-3">
    //       <Form.Label>Location</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicHomeTeam" className="mb-3">
    //       <Form.Label>Home Team</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Home Team" value={home_team} onChange={(e) => setHomeTeam(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicAwayTeam" className="mb-3">
    //       <Form.Label>Away Team</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Away Team" value={away_team} onChange={(e) => setAwayTeam(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicPrice" className="mb-3">
    //       <Form.Label>Price</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicDate" className="mb-3">
    //       <Form.Label>Date</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicPhoto" className="mb-3">
    //       <Form.Label>Photo</Form.Label>
    //       <Form.Control type="text" placeholder="Enter Photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
    //     </Form.Group>
    //     <Button type="submit">Add Match</Button>
    //     <div className="message">
    //       {message ? <p>{message}</p> : null}
    //     </div>
    //   </Form>
    // </div>
  );
};

export default AddMatch;
