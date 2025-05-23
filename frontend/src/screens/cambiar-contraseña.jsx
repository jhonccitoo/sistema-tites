import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
  const [formValidated, setFormValidated] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity() || formData.newPassword !== formData.confirmPassword) {
      e.stopPropagation();
    } else {
      console.log('Nueva contraseña:', formData.newPassword);
      // Aquí iría la lógica para guardar la nueva contraseña
    }

    setFormValidated(true);
  };

  return (
    <main className="login-card" role="main">
      <h1 className="login-title">Recuperar Contraseña</h1>
      <form
        className={formValidated ? 'was-validated' : ''}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            placeholder="Ingrese nueva contraseña"
            required
            value={formData.newPassword}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Ingrese una nueva contraseña</div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme su contraseña"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="invalid-feedback">
            {formData.newPassword !== formData.confirmPassword
              ? 'Las contraseñas no coinciden'
              : 'Confirme su contraseña'}
          </div>
        </div>

        <button type="submit" className="btn btn-login w-100 mt-3">
          Confirmar nueva contraseña
        </button>
      </form>
    </main>
  );
};

export default ResetPassword;
