import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const TareasForm = ({ onClickFn }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [puntos, setPuntos] = useState("");
    const [materia, setMateria] = useState("");
    const [fechaEntrega, setfechaEntrega] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || puntos === "" || materia === "" || fechaEntrega === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = {
                id: id,
                name: name,
                puntos: puntos,
                materia: materia,
                fechaEntrega: fechaEntrega
            };
            onClickFn(data);
        }
    }
    // Regreso de informcion dinamica al insertar datos
    return (
        <Container>
            <Row>
                <Col md={6}  >
                    <Form onSubmit={onEnviar}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(txt) => setName(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Share your name with us
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" value={materia} onChange={(txt) => setMateria(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Grade">
                            <Form.Label>Grade</Form.Label>
                            <Form.Control type="number" placeholder="Grade Points" value={puntos} onChange={(txt) => setPuntos(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateTo">
                            <Form.Label>DateTo</Form.Label>
                            <Form.Control type="date" placeholder="Date Sheadule" value={fechaEntrega} onChange={(txt) => setfechaEntrega(txt.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default TareasForm;