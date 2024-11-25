import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserForm from './UserForm';
import UserList from './UserList';
import UserDetails from './UserDetails';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';
import { UserProvider } from './context/UserContext';

const App = () => {
  const addUser = async newUser => {
    try {
      const response = await fetch(
        'https://672d9882fd8979715642eac8.mockapi.io/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUsers([...users, data]); //Agregar el nuevo usuario al estado
      } else {
        console.error('Error al agregar usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <UserProvider>
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id='nav' data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">USER MANAGER</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><Link to="/"><p>Inicio</p></Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/create"><p>Crear Usuario</p></Link></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br/><br/>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/create" element={<UserForm addUser={addUser} />} />
          <Route path="/edit/:id" element={<UserEdit />} />
          <Route path="/delete/:id" element={<UserDelete />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;