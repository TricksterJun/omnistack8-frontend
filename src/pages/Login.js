import React, { useState } from 'react';
import './Login.css';
import { Form, Input } from '@rocketseat/unform';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"/>
        <input 
          placeholder="Digite seu usuário no github" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}