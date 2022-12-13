import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v3/tickets';

const FETCH_TICKET = 'FETCH_TICKET';

const initialState = {
  tickets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_TICKET}/fulfilled`:
      return { ...state, tickets: action.payload };
    default:
      return state;
  }
};

export const fetchTickets = createAsyncThunk(FETCH_TICKET, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});
