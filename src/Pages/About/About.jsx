import { Container, Image, Card, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <Container>
                <Row className="text-center my-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className="display-4">
                            ¡Bienvenidos a Rolling Hotel & Resort!
                        </h1>
                        <p className="lead">
                            Desde hace más de 10 años en el Norte Argentino, se encuentra Rolling Hotel & Resort ubicado en la zona céntrica de la capital Tucumana, siendo ideal para hacer turismo, recorrer la ciudad caminando, visitar museos o realizar reuniones de negocios. Cuenta con Restobar, salones para eventos sociales o corporativos y una Sala VIP.
                        </p>
                    </Col>
                </Row>

                <div className="row text-center mt-3">
                    <div className="col-12">
                        <br />
                        <hr />

                        <h3 className="mb-4 mt-6">Nuestro equipo</h3>
                    </div>
                </div>

                <Row className="justify-content-center">
                    <Col md={5} className="mb-4">
                        <Card className="shadow">
                            <Card.Img
                                src="https://media.istockphoto.com/id/1384874531/es/vector/silueta-de-hombre-de-traje-avatar-no-identificado.jpg?s=612x612&w=0&k=20&c=9vuS9E6RA0ZM0oOSxD0zVaxc6DvDwwDCrtYFJrq4sMU="
                                alt="Nicolas Veliz"
                                className="card-img-top"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                            <Card.Body>
                                <Card.Title>Nicolas Veliz</Card.Title>
                                <p>Develop Jr.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AboutUs;

