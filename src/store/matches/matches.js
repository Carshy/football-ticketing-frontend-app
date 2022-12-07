// const FETCH_MATCH = 'FOOTBALL-TICKETING-FRONTEND-APP/matches/FETCH_MATCH';

// const initialState = [];

// const matchesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MATCH:
//       return [...state, action.match];
//     default:
//       return state;
//   }
// };

// export const fetchMatch = (match) => ({
//   type: FETCH_MATCH,
//   match,
// });

// export const fetchMatches = () => async (dispatch) => {
//   const result = await fetch('http://localhost:3000/api/v1/matches');
//   const json = await result.json();
//   console.log(json)
//   const matchesFetched = json.map((matches) => ({
//     id: matches.id,
//     home_team: matches.home_team,
//     away_team: matches.away_team,
//     stadium: matches.stadium,
//     date: matches.date,
//     location: matches.location,
//     price: matches.price,
//   }));
//   dispatch(fetchMatch(matchesFetched));
// };

import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/matches';

const FETCH = 'hello-rails-react/greetings/FETCH';

const initialState = {
  matches: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, matches: action.payload };
    default:
      return state;
  }
};

export const fetchMatches = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
});
