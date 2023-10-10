import React from 'react';
import { Container, Row, Col, Button, Form, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Record = () => {
    const RegistroSchema = Yup.object().shape({
        nombre: Yup.string().required('Campo requerido'),
        email: Yup.string().email('Formato de correo electrónico inválido').required('Campo requerido'),
        contraseña: Yup.string().required('Campo requerido').min(6, 'Mínimo 6 caracteres'),
        confirmarContraseña: Yup.string()
            .oneOf([Yup.ref('contraseña'), null], 'Las contraseñas deben coincidir')
            .required('Campo requerido'),
    });

    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            contraseña: '',
            confirmarContraseña: '',
        },
        validationSchema: RegistroSchema,
        onSubmit: (values) => {
            try {
                const respuesta = axios.post('http://localhost:3000/usuarios', values);
                console.log(respuesta, 'Respuesta de Usuarios');
            } catch (error) {
                console.log(error, 'Error de Usuarios');
            }
        },
    });

    return (
        <Container>
            <br />
            <br />
            <Row>
                <Col></Col>
                <Col>
                    <Card border='primary' style={{ width: '24rem' }}>
                        {['Primary'].map((variant) => (
                            <Card
                                bg={variant.toLowerCase()}
                                key={variant}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            >
                                <Card.Header>
                                    <Row>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col>
                                            <FontAwesomeIcon icon={faUser} beat style={{ color: '#ffffff' }} />
                                        </Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col></Col>
                                    </Row>
                                </Card.Header>
                            </Card>
                        ))}
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='nombre'
                                        value={formik.values.nombre}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Ingresar nombre'
                                        className={formik.touched.nombre && formik.errors.nombre ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.nombre && formik.errors.nombre && (
                                        <div className='invalid-feedback'>{formik.errors.nombre}</div>
                                    )}
                                    <Form.Text muted>Ingrese su nombre completo.</Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control
                                        type='email'
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Ingresar email'
                                        className={formik.touched.email && formik.errors.email ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className='invalid-feedback'>{formik.errors.email}</div>
                                    )}
                                    <Form.Text muted>Ingrese una dirección de correo válida.</Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicPassword'>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type='password'
                                        name='contraseña'
                                        value={formik.values.contraseña}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Ingresar Contraseña'
                                        className={formik.touched.contraseña && formik.errors.contraseña ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.contraseña && formik.errors.contraseña && (
                                        <div className='invalid-feedback'>{formik.errors.contraseña}</div>
                                    )}
                                    <Form.Text muted>Ingrese una contraseña con al menos 6 caracteres.</Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicPassword'>
                                    <Form.Label>Confirmar Contraseña</Form.Label>
                                    <Form.Control
                                        type='password'
                                        name='confirmarContraseña'
                                        value={formik.values.confirmarContraseña}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Ingresar nuevamente la contraseña'
                                        className={
                                            formik.touched.confirmarContraseña && formik.errors.confirmarContraseña
                                                ? 'is-invalid'
                                                : ''
                                        }
                                    />
                                    {formik.touched.confirmarContraseña && formik.errors.confirmarContraseña && (
                                        <div className='invalid-feedback'>{formik.errors.confirmarContraseña}</div>
                                    )}
                                    <Form.Text muted>Ingrese nuevamente la contraseña para confirmar.</Form.Text>
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Button variant='primary' type='submit'>
                                            Registrarse
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Nav defaultActiveKey='/home' as='ul'>
                                            <Nav.Item as='li'>
                                                <Form.Label>
                                                    Si ya posee una cuenta
                                                    <Nav.Link eventKey='link-1' href='/Login'>
                                                        ...ir a iniciar sesión
                                                    </Nav.Link>
                                                </Form.Label>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <br />
        </Container>
    );
};

export default Record;