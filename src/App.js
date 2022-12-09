import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import './app.scss';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
