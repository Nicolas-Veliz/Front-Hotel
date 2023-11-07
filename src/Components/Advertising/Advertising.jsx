import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Advertising = () => {
    return (
        <Container fluid>
            <Row>
                <>
                    <Link href='https://previaje.gob.ar/'
                        target="_blank">
                        <Image
                            className="img-fluid d-block w-100"
                            src="src\assets\img\Publicidad Previaje.jpg"
                            alt="publicidad pre-viaje"
                        />
                    </Link>
                </>
            </Row>
        </Container>
    )
}

export default Advertising