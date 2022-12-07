import { configureStore, combineReducers } from '@reduxjs/toolkit';
import matchesReducer from './matches/matches';

const rootReducer = combineReducers({ matches: matchesReducer });
const store = configureStore({ reducer: rootReducer });
export default store;
