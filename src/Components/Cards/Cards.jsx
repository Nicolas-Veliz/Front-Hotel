import { useContext } from 'react'
import { InventoryContext } from '../../Context/InventoryContext'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import './../Cards/styleCards.css'

const Cards = () => {

    const { inventario } = useContext(InventoryContext)
    console.log(inventario, "inventario")

    return (
        <>
            <Container fluid="md-2">
                <Row>
                    {inventario === undefined ?
                        "No Hay habitaciones disponibles" :
                        inventario.map((inventario) => (
                            <>
                                <Col>
                                    <Card data-bs-theme="dark" key={inventario.id} style={{ width: '15rem', margin: '10px' }}>
                                        <Card.Img variant="top" style={{ height: '10rem' }} src={inventario.img1} />
                                        <Card.Body>
                                            <Card.Title>
                                                {inventario.nombre}
                                            </Card.Title>
                                            <Card.Text>
                                                Precio: {inventario.precio}
                                            </Card.Text>

                                            <Button variant="primary">Descripcion</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        ))}
                </Row>
            </Container>
        </>
    )
}

export default Cards;