import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Hook para redirigir


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Obtiene la función de navegación

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!username || !password) {
        setError("Username and password are required.");
        setIsLoading(false);
        return;
    }

    try {
      // Llama a tu endpoint de login en el backend
      // Asegúrate de crear esta ruta en tu backend (ej: POST /api/auth/login)
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        password,
      });

      // --- Manejo de la Respuesta del Backend ---
      // El backend debería responder con éxito y, comúnmente, un token (JWT)
      // o establecer una cookie de sesión. Aquí asumimos que devuelve un token.
      console.log('Login successful:', response.data); // Verifica qué devuelve el backend

      // Ejemplo: Si el backend devuelve un token JWT en response.data.token
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token); // Guarda el token en localStorage
        // Podrías guardar también datos del usuario si los necesitas globalmente
        // localStorage.setItem('userData', JSON.stringify(response.data.user));

         // Redirige al usuario a la página principal (o dashboard)
         // Puedes ajustar la ruta según tu aplicación
         navigate('/notas'); // Redirige a la lista de notas, por ejemplo

        // Opcional: Recargar la ventana para asegurar que todo se actualice
        // window.location.reload();
      } else {
          // Si el backend no devuelve lo esperado
           setError("Login failed. Please try again.");
      }


    } catch (err) {
      console.error('Login error:', err);
      // Muestra un mensaje de error genérico o uno específico del backend
      const message = err.response?.data?.message || 'Invalid username or password.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="row justify-content-center mt-5"> {/* Centra el contenido */}
      <div className="col-md-6 col-lg-4"> {/* Limita el ancho */}
        <div className="card card-body shadow-sm"> {/* Añade sombra */}
          <h3 className="text-center mb-4">Login</h3> {/* Título centrado */}
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="login-username">Username</label>
              <input
                type="text"
                id="login-username" // ID para el label
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={onChangeInput}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password" // ID para el label
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={onChangeInput}
                required
                disabled={isLoading}
              />
            </div>

             {/* Mostrar Errores */}
             {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {/* Opcional: Enlace para registrarse */}
          {/* <div className="mt-3 text-center">
            Don't have an account? <Link to="/user">Sign Up</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;