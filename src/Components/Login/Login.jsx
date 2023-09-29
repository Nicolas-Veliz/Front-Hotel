import React, { useContext } from 'react';
import { Container, Row, Col, Button, Form, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../Context/UserContext';
import '../../Components/Login/styleLogin.css';

function Login() {
  const { usuarios } = useContext(UserContext);

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Formato de correo electrónico inválido').required('Campo requerido'),
    contraseña: Yup.string().required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      contraseña: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      // ... tu lógica de manejo de envío
    },
  });

  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Card border='primary' style={{ width: '25rem' }}>
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
                  {formik.touched.email && !formik.errors.email && (
                    <div className='valid-feedback'>Correo válido</div>
                  )}
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
                  {formik.touched.contraseña && !formik.errors.contraseña && (
                    <div className='valid-feedback'>Contraseña válida</div>
                  )}
                </Form.Group>

                <Row>
                  <Col>
                    <Button variant='primary' type='submit'>
                      Iniciar Sesión
                    </Button>
                  </Col>
                  <Col>
                    <Nav defaultActiveKey='/home' as='ul'>
                      <Nav.Item as='li'>
                        <Form.Label>
                          Si no posee una cuenta
                          <Nav.Link eventKey='link-1' href='/Registro'>
                            ...ir a Registrarse
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
}

export default Login;