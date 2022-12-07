import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';

const App = () => (
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);

export default App;
