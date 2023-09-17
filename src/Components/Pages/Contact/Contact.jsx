import { Form, FloatingLabel, Col, Row, Button, Card } from 'react-bootstrap';
import './../Contact/styleContact.css';
import MapaTucuman from './../Map/Map.jsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { clsx } from 'clsx';

const Contact= () => {
    const ContactoSchema = Yup.object().shape({
        nombreApellido: Yup.string().required('Campo requerido').max(40, 'maximo 40 caracteres'),
        email: Yup.string().email('Formato de correo electrónico inválido').required('Campo requerido').max(30, 'maximo 30 caracteres').min(5, 'minimo 5 caracteres'),
        telefono: Yup.string().required('Campo requerido').max(15, 'maximo 15 caracteres').matches(/^[0-9-+]+$/, 'Solo se permiten números, + y -'),
        motivo: Yup.string().required('Campo requerido'),
        comentario: Yup.string().required('Campo requerido').min(4, 'numero minimo de caracteres').max(400, 'numero maximo de caracteres'),
    });

    const initialValues = {
        email: '',
        nombreApellido: '',
        motivo: '',
        comentario: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: ContactoSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log('Valores de formik', values);
            // Agrega aquí la lógica para enviar el formulario
        },
    });

    return (
        <div className='form-container d-flex flex-column align-items-center'>
            <h2 className='mb-4 text-white'>Aquí estamos!</h2>
            <MapaTucuman />

            <div className='logo-container text-center'>
                <img
                    src='../../../public/img/logo_RHR (1).jpg' // Ruta a tu imagen de logo
                    alt='Logo del hotel'
                    className='logo-img'
                />
            </div>
            <h3 className='mb-4 text-white'>Escribinos</h3>
            <Form className='w-75' onSubmit={formik.handleSubmit} noValidte>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="nombreApellido">
                            <Form.Control
                                type="text"
                                id="nombreApellido"
                                placeholder="Ingrese Nombre y Apellido"
                                name="nombreApellido"
                                maxLength={40}
                                value={formik.values.nombreApellido}
                                onChange={formik.handleChange}
                                {...formik.getFieldProps("nombreApellido")}
                                className={clsx(
                                    'form-control',
                                    {
                                        'is-invalid': formik.touched.nombreApellido && formik.errors.nombreApellido
                                    },
                                    {
                                        'is-valid': !formik.errors.nombreApellido && formik.touched.nombreApellido
                                    }
                                )}


                            />
                            {formik.touched.nombreApellido && formik.errors.nombreApellido && (
                                <div className=" text-danger fw-bolder mt-1">
                                    <span role="alert">{formik.errors.nombreApellidoel}</span>
                                </div>

                            )}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="Ingresar Email"
                                id="email"
                                name="email"
                                maxLength={30}
                                minLength={5}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                {...formik.getFieldProps("email")}
                                className={clsx(
                                    'form-control',
                                    {
                                        'is-invalid': formik.touched.email && formik.errors.email
                                    },
                                    {
                                        'is-valid': !formik.errors.email && formik.touched.email
                                    }
                                )}

                            />

                            {formik.touched.email && formik.errors.email && (
                                <div className=" text-danger fw-bolder mt-1">
                                    <span role="alert">{formik.errors.email}</span>
                                </div>

                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="telefono" className="mb-3">
                    <Form.Control
                        type="tel"
                        id="telefono"
                        placeholder="Ingresar Teléfono"
                        name="telefono"
                        maxLength={15}
                        value={formik.values.telefono}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const sanitizedInput = inputValue.replace(/[^0-9-+]/g, ''); // Solo permite números, + y -
                            formik.handleChange('telefono')(sanitizedInput);
                        }}
                        {...formik.getFieldProps("telefono")}
                        className={clsx(
                            'form-control',
                            {
                                'is-invalid': formik.touched.telefono && formik.errors.telefono
                            },
                            {
                                'is-valid': !formik.errors.telefono && formik.touched.telefono
                            }
                        )}
                    />
                    {formik.touched.telefono && formik.errors.telefono && (
                        <div className=" text-danger fw-bolder mt-1">
                            <span role="alert">{formik.errors.telefono}</span>
                        </div>

                    )}
                </Form.Group>

                <Form.Group controlId="motivo" className="mb-3">
                    <Form.Control
                        as="select"
                        placeholder="Motivo"
                        name="motivo"
                        value={formik.values.motivo}
                        onChange={formik.handleChange}
                    >
                        <option disabled value="">
                            Selecciona un motivo
                        </option>
                        <option value="consulta">Consulta</option>
                        <option value="reserva">Reserva</option>
                        <option value="queja">Queja</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="comentario" className="mb-3">
                    <FloatingLabel controlId="floatingTextarea2" label="Su Comentario">
                        <Form.Control
                            as="textarea"
                            style={{ height: '200px' }}
                            name="comentario"
                            maxLength={400}
                            minLength={4}
                            value={formik.values.comentario}
                            onChange={formik.handleChange}
                        />
                    </FloatingLabel>
                </Form.Group>

                <div className='text-center'>
                    <Button className='custom-button' variant='primary' type='submit'>
                        Enviar Consulta
                    </Button>
                </div>
            </Form>
            <Card className="text-center mt-5">
                <Card.Body>
                    <Card.Title>Contacto del Hotel</Card.Title>
                    <Card.Text>
                        Para cualquier consulta o reserva, puedes contactarnos al siguiente número:
                    </Card.Text>
                    <Card.Text className="fw-bold">Teléfono: +54 03814335687</Card.Text>
                    <Button variant="primary" href="tel:+54 03814335687">Llamar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Contact;