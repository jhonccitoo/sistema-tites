import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <---- IMPORTA useNavigate

const Login = () => {
  const [formValidated, setFormValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      try {
        const response = await axios.post('http://localhost:4000/api/auth/login', formData);
        console.log('Respuesta completa del backend (ÉXITO):', response); // <---- AGREGADO
        console.log('Código de estado de la respuesta (ÉXITO):', response.status); // <---- AGREGADO
        console.log('Datos de la respuesta (ÉXITO):', response.data); // <---- AGREGADO
        console.log('Token recibido (ÉXITO):', response.data.token); // Verifica si el token está aquí
        console.log('Datos del usuario (ÉXITO):', response.data.user); // Verifica si los datos del usuario están aquí

        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          navigate('/notas');
        } else {
          setLoginError('Inicio de sesión exitoso, pero no se recibió el token.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        let errorMessage = 'Error al iniciar sesión. Inténtelo de nuevo.';
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        setLoginError(errorMessage);
      }
    }
    setFormValidated(true);
  };

  

  const style = `
    :root {
      --primary-color: #28a745;
      --secondary-color: #6c757d;
      --light-gray: #f8f9fa;
      --medium-gray: #e9ecef;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(to bottom, var(--light-gray), var(--medium-gray));
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #212529;
      padding: 1rem;
    }

    .login-card {
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      padding: 2.5rem;
      background: #ffffff;
      width: 100%;
      max-width: 400px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .login-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.08);
    }

    .login-title {
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      text-align: center;
      font-weight: 600;
    }

    .form-control {
      border-radius: 25px;
      padding: 0.75rem 1.25rem;
      border: 1px solid #ced4da;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .form-control:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.25);
    }

    .btn-login {
      background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
      color: white;
      border: none;
      border-radius: 25px;
      padding: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
    }

    .btn-login:hover {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      transform: translateY(-2px);
    }

    .form-label {
      font-weight: 500;
      margin-bottom: 0.5rem;
      display: block;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .forgot-password {
      display: block;
      text-align: center;
      margin-top: 1rem;
      color: var(--secondary-color);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .forgot-password:hover {
      color: var(--primary-color);
      text-decoration: underline;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 576px) {
      .login-card {
        padding: 1.5rem;
      }
    }

    .btn-register {
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 25px;
      padding: 0.75rem;
      font-weight: 500;
      width: 100%;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .btn-register:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <main className="login-card" role="main">
        <h1 className="login-title">TITES - URP</h1>
        <form 
          className={formValidated ? 'was-validated' : ''} 
          noValidate 
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Ingrese su usuario"
              required
              aria-required="true"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Por favor ingrese su usuario</div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Clave</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Ingrese su clave"
              required
              aria-required="true"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Por favor ingrese su clave</div>
          </div>

          <button type="submit" className="btn btn-login w-100 mt-3">
            <span className="btn-text">Ingresar</span>
            <span className="sr-only">al sistema TITES</span>
          </button>

          <button type="button" className="btn btn-register">
            Registrarse
          </button>

          <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
        </form>
      </main>
    </>
  );
};

export default Login;
