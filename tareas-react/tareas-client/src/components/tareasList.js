//require("dotenv").config()
import { useEffect, useState } from "react";
import Tarea from "./tarea";
import TareasForm from "./tareasForm"
import { Button } from 'react-bootstrap';


const TareasList = () => {


    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Hook para editar varibles de estado
    useEffect(() => {
        fetch("http://localhost:3001/tareas/")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getTareas = () => {
        fetch("http://localhost:3001/tareas/")
            .then((res) => res.json())
            .then((data) => setTareas(data.data))
            .then((err) => console.log(`Error: ${err}`));
    }

    const createTarea = (data) => {
        try {
            fetch("http://localhost:3001/tareas/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    setTareas([...tareas, dataResponse.data]);
                    setShowForm(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTarea = (data) => {
        try {
            fetch(`http://localhost:3001/tareas/${data}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                    // setTareas([...tareas, dataResponse.data])
                })
                .then(() => {
                    getTareas()
                })
        } catch (err) {
            console.log(err)
        }
    }

    const updateTarea = (data) => {
        try {
            fetch(`http://localhost:3001/tareas/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    //setTareas(tareas.map(tarea => tarea.id === dataResponse.data.id ? dataResponse.data : tarea));
                    setShowForm(false);
                }).then(() => {
                    getTareas()
                });
        } catch (err) {
            console.log(err);
        }
    }

    // Regreso dinamico de informacion
    return (
        <div>
            {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    index={index}
                    tarea={tarea}
                    onDelete={deleteTarea}
                    onUpdate={updateTarea}
                />
            ))}
            <br></br>
            <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Create Homework"}
            </Button>
            {showForm && <TareasForm onClickFn={createTarea}></TareasForm>}
            <br></br>
        </div>
    )
}

export default TareasList;