import { useEffect, useState } from "react";
import Usuario from "./usuario";
import UsuariosForm from "./usuariosForm"
import { Button } from 'react-bootstrap';

const UsuariosList = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Hook para editar varibles de estado
    useEffect(() => {
        fetch("https://apirestusuariosplata.azurewebsites.net/usuarios/")
            .then((res) => res.json())
            .then((data) => setUsuarios(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getUsuarios = () => {
        fetch("https://apirestusuariosplata.azurewebsites.net/usuarios")
            .then((res) => res.json())
            .then((data) => setUsuarios(data.data))
            .then((err) => console.log(`Error: ${err}`));
    }

    const createUsuario = (data) => {
        try {
            fetch("https://apirestusuariosplata.azurewebsites.net/usuarios", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    setUsuarios([...usuarios, dataResponse.data]);
                    setShowForm(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteUsuario = (data) => {
        try {
            fetch(`https://apirestusuariosplata.azurewebsites.net/usuarios/${data}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                    // setUsuarios([...usuarios, dataResponse.data])
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
            fetch(`https://apirestusuariosplata.azurewebsites.net/usuarios/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    //setUsuarios(usuarios.map(usuario => usuario.id === dataResponse.data.id ? dataResponse.data : usuario));
                    setShowForm(false);
                }).then(() => {
                    getUsuarios()
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {usuarios.map((usuario, index) =>(
                <Usuario key={index} index={index} usuario = {usuario} onDelete={deleteUsuario} onUpdate={updateUsuario}
                />
            ))}
            <h1>Usuarios</h1>
            <hr></hr>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Add New User"}
            </Button>
            <br></br>
            <br></br>
            {showForm && <UsuariosForm onClickFn={createUsuario} />}
            <hr></hr>
            {usuarios.map((usuario) => (
                <Usuario key={usuario._id} usuario={usuario} onDelete={deleteUsuario} onUpdate={updateUsuario} />
            ))}
        </div>
    )
}

export default UsuariosList;
