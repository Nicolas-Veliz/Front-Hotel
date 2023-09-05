import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../PiedePagina/stylepiedepagina.css';

function PiedePagina() {
  return (
    <footer className='text-center text-white'>
    <Container>
      <Row>
        <Col md="4" lg="3" xl="3" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'></h6>
        <p><a href="#!" className='text-center text-white'>Politicas generales del hotel</a></p>
        </Col>
        <Col md="4" lg="3" xl="3" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'></h6>
        <Container>
              <p>
                <a href='/' id='img'>
                  <img src='src\assets\img\Logo Hotel.jpg'/>
                </a>
              </p>
        </Container>
        </Col>
        <Col md="4" lg="3" xl="3" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'></h6>
              <p>
              Gral. Paz 576, San Miguel de Tucumán, Tucumán.
              </p>
              <p>
              Teléfono: 0381 578-3030
              </p>
              <p>
                Mail: academy@rollingcodeschool.com
              </p>
        </Col>
      </Row>
    </Container>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2023 Copyright:
    <a className='text-white' href='https://rollingcodeschool.com/'> <></>
    RollingCodeSchool.com
    </a>
  </div>
  </footer>
  );
}

export default PiedePagina;