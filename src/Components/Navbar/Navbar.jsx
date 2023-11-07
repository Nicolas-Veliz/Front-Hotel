import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './../Navbar/styleNavbar.css';


const Navegador = () => {
    return (
        <Navbar expand="lg" className='text-center text-white'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavDropdown title="Habitaciones" id="navbarDropdown1">
                            <NavDropdown.Item href="#action1">Handicap</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">King</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Single</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">Suite</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Suite Delux</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Servicios" id="navbarDropdown2">
                            <NavDropdown.Item href="#action1">Restaurante</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">Salones y Reacreación</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Spa & Piscina</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">Recreación</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='action' href="#action6">Promociones</Nav.Link>
                        <Container>
                            <Row>
                                <Col xs={6} md={3}>
                                    <Image src="src\assets\img\Logo Hotel.jpg" rounded />
                                </Col>
                            </Row>
                        </Container>
                        <Nav.Link className='action' href="#action7">Experiencias</Nav.Link>
                        <Nav.Link className='action' href="#action8">Nosotros</Nav.Link>
                        <Nav.Link className='action' href="#action9">Contactos</Nav.Link>
                    </Nav>
                    <button type="button" className="btn btn-outline-light">
                        <Nav.Link eventKey='link-1' href='/Record'>
                        Acceder/Registrarse</Nav.Link>
                        </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegador;
