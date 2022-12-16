import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './styles/register.scss';

const Register = () => {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (user === '') {
      toast.error('Enter Username');
    } else {
      await fetch('http://localhost:3000/api/v2/users', {
        method: 'post',
        body: JSON.stringify({
          name: user,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (Object.values(data).includes(user)) {
            toast.success('User Created');
          } else {
            toast.error('Error');
            setUser('');
          }
        });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user === '') {
      toast.error('Enter Username');
    } else {
      await fetch('http://localhost:3000/api/v2/authenticate', {
        method: 'post',
        body: JSON.stringify({
          name: user,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (Object.values(data[0]).includes(user)) {
            toast.success('Login Successful');
            localStorage.setItem('user', JSON.stringify(data[0]));
            setTimeout(() => {
              window.location.reload();
            }, 2500);
          } else {
            toast.error('Invalid Entry');
            setUser('');
          }
        });
    }
  };

  return (
    <div className="container">
      <Toaster
        position="top-center"
      />
      <h1>Register || Login</h1>
      <p>To register, enter your username...</p>
      <p>To login, enter your unique username...</p>
      <form>
        <input id="username" type="text" value={user} placeholder="Enter Unique Username..." onChange={handleChange} />
        <div className="submissions">
          <input type="submit" value="Register" onClick={handleRegister} />
          <input type="submit" value="Login" onClick={handleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Register;
