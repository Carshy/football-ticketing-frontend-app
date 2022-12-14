import { configureStore, combineReducers } from '@reduxjs/toolkit';
import matchesReducer from './matches/matches';
import ticketsReducer from './tickets/tickets';

const rootReducer = combineReducers({
  matches: matchesReducer,
  tickets: ticketsReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
