import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../Footer/styleFooter.css';

function Footer() {
  return (
    <footer className='text-center text-white'>
    <Container>
      <Row>
        <Col md="4" lg="3" xl="3" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'></h6>
        <p><a href="#!" className='text-center text-white'>Politicas generales del hotel</a></p>
        <p><a href="#!" className='text-center text-white'>Seguinos en nuestras redes sociales:</a></p>
        <div class="footer-bottom">
                    <div class='social-links'>
                        <ul>
                            <li>
                                <a href="#" title="Instagram">
                                    <img src="src\assets\img\red social\instagram.svg" alt='Instagram'/>                       
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Linkedin">
                                    <img src="src\assets\img\red social\linkedin.svg" alt='Linkedin'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter">
                                    <img src="src\assets\img\red social\twitter.svg" alt='Twitter'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Youtube">
                                    <img src="src\assets\img\red social\youtube.svg" alt='YouTube'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
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

export default Footer;