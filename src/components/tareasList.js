//require("dotenv").config()
import { useEffect, useState } from "react";
import Usuario from "./Usuario";
import TareasForm from "./tareasForm"
import { Button } from 'react-bootstrap';


const UsuariosList = () => {


    const [Usuarios, setUsuarios] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Hook para editar varibles de estado
    useEffect(() => {
        fetch("http://localhost:4000/usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getUsuarios = () => {
        fetch("https://Usuarios-api-devsoft.azurewebsites.net/Usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data.data))
            .then((err) => console.log(`Error: ${err}`));
    }

    const createUsuario = (data) => {
        try {
            fetch("https://Usuarios-api-devsoft.azurewebsites.net/Usuarios", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    setUsuarios([...Usuarios, dataResponse.data]);
                    setShowForm(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteUsuario = (data) => {
        try {
            fetch(`https://Usuarios-api-devsoft.azurewebsites.net/Usuarios/${data}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                    // setUsuarios([...Usuarios, dataResponse.data])
                })
                .then(() => {
                    getUsuarios()
                })
        } catch (err) {
            console.log(err)
        }
    }

    const updateUsuario = (data) => {
        try {
            fetch(`https://Usuarios-api-devsoft.azurewebsites.net/Usuarios/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    //setUsuarios(Usuarios.map(Usuario => Usuario.id === dataResponse.data.id ? dataResponse.data : Usuario));
                    setShowForm(false);
                }).then(() => {
                    getUsuarios()
                });
        } catch (err) {
            console.log(err);
        }
    }

    // Regreso dinamico de informacion
    return (
        <div>
            {Usuarios.map((usuario, index) => (
                <Usuario
                    key={index}
                    index={index}
                    Usuario={usuario}
                    onDelete={deleteUsuario}
                    onUpdate={updateUsuario}
                />
            ))}
            <br></br>
            <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Create Homework"}
            </Button>
            {showForm && <TareasForm onClickFn={createUsuario}></TareasForm>}
            <br></br>
        </div>
    )
}

export default UsuariosList;