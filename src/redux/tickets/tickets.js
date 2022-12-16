import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v3/tickets';

// action types
const CREATE_TICKET = 'CREATE_TICKET';
const FETCH_TICKET = 'FETCH_TICKET';

const initialState = {
  tickets: [],
};

// creating tickets with axios
export const createTicket = async (city, matchTime, quantity, userId, matchId) => {
  const data = await axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v3/tickets',
    data: {
      city,
      date: matchTime,
      quantity,
      user_id: userId,
      match_id: matchId,
    },
  });
  return data;
};

// action creators for create tickets
export const ticketAction = (data) => ({
  type: CREATE_TICKET,
  payload: data,
});

export const userTicket = (city, matchTime, quantity, matchId, userId) => async (dispatch) => {
  const data = await createTicket(city, matchTime, quantity, matchId, userId);
  dispatch(ticketAction(data));
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_TICKET}/fulfilled`:
      return { ...state, tickets: action.payload };
    case `${CREATE_TICKET}/fulfilled`:
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
