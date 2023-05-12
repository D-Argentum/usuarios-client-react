import React from 'react'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import TareasUpdateForm from './tareasUpdateForm'

const Usuario = ({ Usuario, onDelete, onUpdate }) => {
    const [showForm, setShowForm] = useState(false)

    const clickTarea = () => {
        onDelete(Usuario.id)
    }

    // Regreso de informcion dinamica 
    return (
        <div>
            <h5>{Usuario.nombre}</h5>
            <h5>{`Id: ${Usuario.id}`}</h5>
            <h5>{`Id: ${Usuario._id}`}</h5>
            <h5>{`Email: ${Usuario.email}`}</h5>
            <h5>{`Password: ${Usuario.password}`}</h5>
            <Button variant="danger" onClick={clickTarea} className="deleteBtn">
                Delete
            </Button>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Update info"}
            </Button>
            {showForm && <TareasUpdateForm onClickFn={onUpdate} oldUsuario={Usuario} ></TareasUpdateForm>}
            <hr></hr>
        </div>
    )
}

export default Usuario;