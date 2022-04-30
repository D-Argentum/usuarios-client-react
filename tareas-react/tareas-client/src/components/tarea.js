import React from 'react'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import TareasUpdateForm from './tareasUpdateForm'

const Tarea = ({ tarea, onDelete, onUpdate }) => {
    const [showForm, setShowForm] = useState(false)

    const clickTarea = () => {
        onDelete(tarea.id)
    }

    // Regreso de informcion dinamica 
    return (
        <div>
            <h5>{tarea.name}</h5>
            <h5>{`Id: ${tarea.id}`}</h5>
            <h5>{`Id: ${tarea._id}`}</h5>
            <h5>{`Subject: ${tarea.materia}`}</h5>
            <h5>{`Grade: ${tarea.puntos}`}</h5>
            <h5>{`Delivery Date: ${tarea.fechaEntrega}`}</h5>
            <h5>{`Creation Date: ${tarea.fechaCreacion}`}</h5>
            <Button variant="danger" onClick={clickTarea} className="deleteBtn">Delete</Button>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Update info"}
            </Button>
            {showForm && <TareasUpdateForm onClickFn={onUpdate} oldTarea={tarea} ></TareasUpdateForm>}
            <hr></hr>
        </div>
    )
}

export default Tarea;