import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UsuarioUpdateForm from './usuariosUpdateForm';

const Usuario = ({ usuario, onDelete, onUpdate }) => {
  const [showForm, setShowForm] = useState(false);

  const handleDelete = () => {
    onDelete(usuario.id);
  };

  return (
    <div>
      <h5>' Id: {usuario.id}'</h5>
      <h5>' Usuario: {usuario.nombre}'</h5>
      <h5>' Email: {usuario.email}'</h5>
      <h5>' Password: {usuario.password}'</h5>
      <Button variant="danger" onClick={handleDelete} className="deleteBtn">Delete</Button>
      <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "Update info"}
      </Button>
      {showForm && <UsuarioUpdateForm onClickFn={onUpdate} oldUsuario={usuario} />}
      <hr></hr>
    </div>
  );
};

export default Usuario;
