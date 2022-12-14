import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './components/Navigation panel/Nav';
import './app.scss';
import Register from './components/pages/Register';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, [user]);

  if (user) {
    return (
      <div className="app">
        <BrowserRouter>
          <Provider store={store}>
            <Nav />
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
  return (
    <>
      <Register />
    </>
  );
}

export default App;
