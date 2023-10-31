import { Button, Modal, Container, Table, Tabs, Tab, Form } from "react-bootstrap";
import { useState } from "react"
import { useContext } from 'react'
import {ContextoInventario} from '../../Context/InventoryContext';
import { UserContext } from '../../Context/UserContext'
import axios from 'axios'

const Administrator = () => {
    const { inventario } = useContext(ContextoInventario);
    console.log(inventario, "inventario");
    const { usuarios } = useContext(UserContext);
    console.log(usuarios, "usuarios");

    // Llamar a Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Agregar una Habitación
    const [habitacion, setHabitacion] = useState({
        nombre: "",
        numero: "",
        precio: "",
        descripcion: "",
        img1: "",
        img2: "",
        img3: "",
    });

    const handleChange = (e) => {
        setHabitacion({
            ...habitacion,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await axios.post("http://localhost:3000/inventario", habitacion);
            console.log(respuesta, "Respuesta de habitaciones"); // Corrección en el acceso a respuesta
        } catch (error) {
            console.error(error, "Error de habitaciones"); // Usar console.error para errores
        }
    };

    return (
        <body data-bs-theme="dark" style={{ height: '94vh' }}>
            <Container data-bs-theme="dark">
                <h1 className="text-center" style={{ padding: '50px' }}>Panel de Administrador</h1>
                <Tabs defaultActiveKey="Reservas" id="justify-tab-example" className="mb-3" data-bs-theme="dark" justify>
                    <Tab eventKey="Reservas" title="Reservas">
                        <Table responsive="sm" data-bs-theme="dark">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Usuario</th>
                                    <th>Habitacion</th>
                                    <th>Desde</th>
                                    <th>Hasta</th>
                                    <th>Estado</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td><Button variant='danger'>Eliminar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="Usuarios" title="Usuarios">
                        <Table responsive="sm" data-bs-theme="dark">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios === undefined ? (
                                    <tr>
                                        <td colSpan="5">No Hay usuarios disponibles</td>
                                    </tr>
                                ) : (
                                    usuarios.map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nombre}</td>
                                            <td>{usuario.email}</td>
                                            <td>Cliente</td>
                                            <td>
                                                <Button style={{ marginRight: '10px', marginTop: '5px', width: '38px' }} variant='danger'>-</Button>
                                                <Button style={{ marginTop: '5px' }} variant='warning'>Bloquear</Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="Habitaciones" title="Habitaciones">
                        <Table responsive="sm" data-bs-theme="dark">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Nombre</th>
                                    <th>Número</th>
                                    <th>Precio</th>
                                    <td>
                                        <Button variant="primary" onClick={handleShow}>
                                            Agregar
                                        </Button>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {inventario === undefined ? (
                                    <tr>
                                        <td colSpan="5">No Hay habitaciones disponibles</td>
                                    </tr>
                                ) : (
                                    inventario.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.numero}</td>
                                            <td>{item.precio}</td>
                                            <td>
                                                <Button style={{ marginRight: '10px', marginTop: '5px', width: '38px' }} variant='danger'>-</Button>
                                                <Button style={{ marginTop: '5px' }} variant='warning'>+</Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </Table>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Inventario de Habitaciones</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="selectToastPlacement" className="form-label">
                                                Nombre
                                            </label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                value={habitacion.nombre}
                                                onChange={handleChange}
                                                className="mt-2"
                                                name="nombre"
                                            >
                                                <option value="Simple">Simple</option>
                                                <option value="Doble">Doble</option>
                                                <option value="Triple">Triple</option>
                                                <option value="Quadruple">Quadruple</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="numero" className="form-label">
                                                Numero
                                            </label>
                                            <input
                                                type="number"
                                                value={habitacion.numero}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="numero"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="precio" className="form-label">
                                                Precio por día
                                            </label>
                                            <input
                                                type="number"
                                                value={habitacion.precio}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="precio"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="descripcion" className="form-label">
                                                Descripción
                                            </label>
                                            <textarea
                                                type="text"
                                                value={habitacion.descripcion}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="descripcion"
                                                rows="3">
                                            </textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="imagen1" className="form-label">
                                                Url Imagen 1
                                            </label>
                                            <input
                                                type="text"
                                                value={habitacion.img1}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="img1"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="imagen2" className="form-label">
                                                Url Imagen 2
                                            </label>
                                            <input
                                                type="text"
                                                value={habitacion.img2}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="img2"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="imagen3" className="form-label">
                                                Url Imagen 3
                                            </label>
                                            <input
                                                type="text"
                                                value={habitacion.img3}
                                                onChange={handleChange}
                                                className="form-control"
                                                name="img3"
                                            />
                                        </div>
                                        <div>
                                            <Modal.Footer>
                                                <Button
                                                    variant="secondary"
                                                    onClick={handleClose}>
                                                    Cerrar
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="submit">
                                                    Guardar
                                                </Button>
                                            </Modal.Footer>
                                        </div>
                                    </Form>
                                </Container>
                            </Modal.Body>
                        </Modal>
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </Container>
        </body>
    );
}

export default Administrator;

