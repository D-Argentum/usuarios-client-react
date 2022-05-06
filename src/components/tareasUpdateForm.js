import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from "react";

const TareasForm = ({ onClickFn, oldTarea }) => {
    const [id, setId] = useState(oldTarea.id)
    const [name, setName] = useState(oldTarea.nombre)
    const [materia, setMateria] = useState(oldTarea.materia)
    const [puntos, setPuntos] = useState(oldTarea.puntos)
    const [fechaEntrega, setfechaEntrega] = useState(oldTarea.fechaEntrega)

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || materia === "" || puntos === "" || fechaEntrega === "") {
            alert("Ypu cant left any empty spaces")
        } else {
            let data = {
                id: id,
                _id: oldTarea._id,
                name: name,
                materia: materia,
                puntos: puntos,
                fechaEntrega: fechaEntrega
            }
            onClickFn(data)
        }
    }

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

export default TareasForm