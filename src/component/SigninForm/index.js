// Imports

import React from 'react';
import './styles.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl=process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');
const newToken = JSON.parse(token);


const SigninForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [message, setMessage] = useState('');

  const handleEmailSubmit = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordSubmit = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordSubmit = (event) => {
    setConfirmPassword(event.target.value);
  };


  const msgError = async () => {
    alert('Formulaire désactivé')
    return
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Le format de l'adresse mail n'est pas valide");
      return;
    }

    if (password.length < 6) {
      alert("Le mot de passe doit être d'un minimum de 6 caractères");
      return;
    }

    if (password !== confirmPassword) {
      alert("La validation du mot de passe ne correspond pas au précédent");
      return;
    }

  // Contact de l'API pour envoyer les informations lors de la création de l'utilisation

    const newUser = {
      "email": `${email}`,
      "password": `${password}`
  }
    try { 

      const response  = await axios.post(`${baseUrl}/register`, newUser, {
        headers: { Authorization: `Bearer ${newToken}`}
      });
  
      navigate('/login')

    } catch(error) {
      console.log(error.response.error)
      setMessage(error.response.error)
    }
  }

  return (
    <div className="input-container">
      <h1 className='title'>Inscription</h1>
      {message != '' &&
        <p>{message}</p>
      }
      <p>"Le formulaire d'inscription est désactivé"</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" name="email" value={email} onChange={handleEmailSubmit} />
        <input type="password" placeholder="Mot de passe" name="password" value={password} onChange={handlePasswordSubmit} />
        <input type="password" placeholder="Confirmation mot de passe" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordSubmit} />
        <p className='validation' onClick={msgError}><span>Valider</span></p>
        {/*<p className='validation' onClick={handleSubmit}><span>Valider</span></p> */}
      </form>
    </div>
  )
}
        
export default SigninForm;