import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/api/v1/matches';

const FETCH = 'FETCH';

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
