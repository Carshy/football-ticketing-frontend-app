import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Match from './components/Match';

const App = () => (
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Match />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);

export default App;
