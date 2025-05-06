import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000); // desaparece en 3 segundos

      return () => clearTimeout(timer);
    }
  }, [error]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/users");
      setUsers(res.data);
      setError(null);
    } catch (err) {
      setError("Error al cargar usuarios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validación mejorada
    if (!username.trim() || !password.trim()) {
      setError("Username y password son obligatorios");
      return;
    }
    if (!username.trim() || /\s/.test(username)) {
      setError("El nombre de usuario no puede contener espacios");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Limpiar errores previos

      await axios.post("http://localhost:4000/api/users", {
        username: username.trim(),
        password: password,
      });

      // Resetear formulario
      setUsername("");
      setPassword("");

      // Recargar lista de usuarios
      await getUsers();
    } catch (err) {
      // Manejo de errores más detallado
      const errorMessage =
        err.response?.data?.message || "Error al crear usuario";

      setError(errorMessage);
      console.error("Error en onSubmit:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
      setLoading(true);
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      await getUsers();
    } catch (err) {
      setError("Error al eliminar usuario");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create New User</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                disabled={loading}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || !username.trim()}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </div>

      <div className="col-md-8">
        <h4>User List</h4>
        {loading && users.length === 0 ? (
          <div className="text-center">Loading users...</div>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                key={user._id}
              >
                {user.username}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(user._id)}
                  disabled={loading}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
